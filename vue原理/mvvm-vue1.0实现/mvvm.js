(function (factory) {
  window.MVVM = factory()
}(function () {

  /************************  属性劫持  ****************************/
    // observe使data变成发布者，watcher是订阅者，订阅data的变化。
  const observe = (data, vm) => {
      if (!data || typeof data !== 'object') return
      return new Observer(data)
    }

  class Observer {
    constructor(obj) {
      this.walk(obj)
    }

    walk(obj) {
      Object.keys(obj).forEach(prop => {
        this.defineReactive(obj, prop, obj[prop])
      })
    }

    defineReactive(obj, prop, val) {  //劫持各个属性
      let dep = new Dep();
      let childObj = observe(val);   // 递归监听子属性

      Object.defineProperty(obj, prop, {
        configurable: true,
        enumerable: true,
        get() {
          Dep.target && Dep.target.addDep(dep);  // 添加订阅者watcher到订阅器列表subs
          return val
        },
        set(newVal) {
          if (newVal === val) return
          val = newVal;
          childObj = observe(newVal);
          dep.notify() // 这里相当于发布者，将变化通知订阅者 watcher
        }
      })
    }
  }


  /****************************  消息订阅器   *****************************/
  let uid = 0;

  class Dep {
    constructor() {
      this.uid = uid++;
      this.subs = []
    }

    addSub(sub) {
      this.subs.push(sub)
    }

    notify() { // 数据变化后通知订阅者
      this.subs.forEach(item => item.update()) // 绑定到watcher 调用订阅者的update方法
    }
  }

  Dep.target = null; // 添加watcher，通过Dep定义一个全局target属性，暂存watcher, 用完销毁


  /****************************** 解析模板 ********************************/
    //解析模板指令，将模板中的变量替换成数据
  const updater = {
      text(node, val) {
        node.textContent = ( typeof val !== "undefined") ? val : ''
      },
      model(node, val) {
        node.value = (typeof val === 'undefined') ? '' : val;
        console.log(node.value)
      }
    }

  // 处理指令
  const compileUtil = {
    text(node, vm, exp) {
      this.bind(node, vm, exp, 'text')
    },

    /**
     * 监听数据、绑定更新函数
     * @param node
     * @param vm
     * @param exp 判断指令
     * @param dir 指text html class等指令
     */
    bind(node, vm, exp, dir) {
      let updaterFn = updater[dir];
      updaterFn && updaterFn(node, this._getVmVal(vm, exp)); // 初始化视图
      // 模板编译过程中的指令和数据绑定都会生成 Watcher 实例
      new Watcher(vm, exp, (val, oldVal) => { // 在对应的属性消息订阅器中, 添加该订阅
        updaterFn && updaterFn(node, val, oldVal);
      })
    },

    model(node, vm, exp) {
      this.bind(node, vm, exp, 'model')
      let value = this._getVmVal(vm, exp)

      node.addEventListener('input', e => {
        let newValue = e.target.value
        if (newValue === value) return
        this._setVmVal(vm, exp, newValue)
        value = newValue
      })
    },

    eventHandler(node, vm, exp, dir) { // 事件处理
      let type = dir.split(":")[1];
      let listener = vm.$options.methods && vm.$options.methods[exp];
      if (type && listener) {
        node.addEventListener(type, listener.bind(vm), false)
      }
    },

    _getVmVal(vm, exp) {
      let val = vm._data;
      //将v-model="child.someStr"中的child.someStr拆成child{someStr=xxx}
      exp = exp.split('.');
      console.log(exp)
      exp.forEach(k => val = val[k]);
      return val;
    },

    _setVmVal(vm, exp, value) {
      let keyPath = exp.split('.')
      let val = vm._data
      keyPath.forEach((key, index) => {
        if (index < keyPath.length - 1) val = val[key]
        val[key] = value
      })
    }
  };

  class Compile {
    constructor(el, vm) {
      this.$vm = vm;
      this.$el = el.nodeType === 1 ? el : document.querySelector(el);

      if (this.$el) {
        let _fragment = this._createFragment(this.$el);
        this.compileElement(_fragment);
        this.$el.appendChild(_fragment);
      }
    }

    // 遍历所有节点及其子节点，解析编译，调用对应的指令渲染函数进行数据渲染， 并调用对应的指令更新函数进行绑定
    compileElement(dom) {
      let childNodes = dom.childNodes
      const reg = /\{\{(.*)\}\}/;

      childNodes.forEach(node => {
        if (node.nodeType === 1) { //编译属性，指令
          this.compile(node)
        } else if (node.nodeType === 3 && reg.test(node.textContent)) {
          compileUtil.text(node, this.$vm, RegExp.$1) //编译变量
        }
        if (node.childNodes && node.childNodes.length) {
          this.compileElement(node) // 遍历编译子节点
        }
      })
    }

    compile(node) {
      let nodeAttrs = node.attributes
      Array.from(nodeAttrs).forEach(attr => { //遍历元素节点中的属性
        if (this._isDirective(attr.name)) { // 判断指令 v- 开头
          let dir = attr.name.substring(2);
          let exp = attr.value;

          if (this._isEventDirective(dir)) { // 事件指令 v-onclick=""
            compileUtil.eventHandler(node, this.$vm, exp, dir)
          } else {  // 普通指令
            compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
          }
        }
      })
    }

    // 在fragment暂存解析编译，插入原来的dom中
    _createFragment(el) {
      let fragment = document.createDocumentFragment();
      let child;
      while (child = el.firstChild) { // 将原生节点拷贝到fragment
        fragment.appendChild(child)
      }
      return fragment
    }

    _isDirective(attr) {
      return /^v-.*/.test(attr)
    }

    _isEventDirective(dir) {
      return /^on.*/.test(dir)
    }
  }


  /********************************  订阅者  ********************************/
  class Watcher {
    constructor(vm, exp, cb) {
      this.vm = vm;
      this.exp = exp;
      this.cb = cb;
      this.depIds = {};  // 这个必须在前面申明
      this.value = this.get(); // 一旦实例化后，取到vm._data的值
    }

    get() {
      // 通过Dep定义全局target属性，暂存watcher将订阅者指向实例自己（被编译的指令）,
      // 对应Dep.target.addDep(dep);
      Dep.target = this
      let value = this.getVmValue()
      Dep.target = null // 该个订阅者获值后立即解除绑定
      return value
    }

    update() {
      let newVal = this.get()
      let oldVal = this.value
      if (newVal !== oldVal) {
        this.cb.call(this.vm, newVal, oldVal) // 执行Compile中绑定的回调，更新视图
      }
    }

    addDep(dep) { // 触发属性的getter，添加订阅者
      if (!this.depIds.hasOwnProperty(dep.uid)) {
        dep.addSub(this)
        this.depIds[dep.uid] = dep
        console.log('uid-------------' + dep.uid)
      }
    }

    getVmValue() {
      let val = this.vm._data
      let keyPath = this.exp.split('.')
      keyPath.forEach(key => val = val[key])
      return val
    }
  }


  /************************* 入口 **************************/

  /*
  * 通过Observer监听自己的model数据
  * 通过Compile解析编译模板指令
  * 用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化
  * */
  class MVVM {
    constructor(options) {
      this.$options = options || {};
      let data = this._data = this.$options.data;
      // 数据代理: 用vm.xxx代替vm._data.xxx
      Object.keys(data).forEach(key => this._proxy(key))
      observe(data, this);
      new Compile(this.$options.el || document.body, this)
    }

    _proxy(key) {
      let vm = this
      Object.defineProperty(vm, key, {
        configurable: true,
        enumerable: true,
        get() {
          return vm._data[key]
        },
        set(newVal) {
          vm._data[key] = newVal
        }
      })
    }

    $watch(exp, cb) {
      new Watcher(this, exp, cb)
    }
  }

  return MVVM
}))
