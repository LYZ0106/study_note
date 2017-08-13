!function (factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    (window.MVVM = factory())
}(function () {'use strict';

  const START = '{{'
  const END = '}}'

  function MVVM(sel, opt) {
    this.root = document.querySelector(sel); // root element
    var model  = opt.model || {};
    var model2sync = {}; // 保存DOM结点的引用，实现从 Model到 View的自动更新

    //是model的一个代理，实现了存/取model值时的get/set方法。
    this.model = getProxyModel();
    var me = this;
    for (var k in model) {
      model2sync[k] = []
    }

    renderDOM(this.root, opt.model)

    if (opt.type === 'form') {
      on(this.root, ['keyup', 'click'], function (e) {
        var name = e.target.name
        if (name) {
          if (e.target.value !== model[name]) {
            me.model[name] = e.target.value
          }
        }
      })
    }

    /*
      设置model的一个代理，实现存取model值时的get/set方法。
     */
    function getProxyModel() {
      var obj = {}
      each(Object.keys(model), function (i, k) {
        Object.defineProperty(obj, k, {
          set: function (v) {
            model[k] = v
            var arr = model2sync[k]
            each(arr, function () {
              this.node.textContent = renderStr(this.raw)
            })
          },
          get: function () {
            return model[k]
          }
        })
      })
      return obj
    }

    // 先尝试实现双向绑定中的model -> view
    //render dom元素的每个属性以及每个子元素的属性
    function renderDOM(dom) {
      each(dom.attributes, function () {
        render(this)
      })
      each(dom.childNodes, function () {
        if (this.nodeType === 1) {
          return renderDOM(this)
        }
        render(this)
      })
    }

    function renderStr(str) {
      var ret = ''
      var arr = str.split(START) // sure have length
      for (var i = 0; i < arr.length; i++) {
        var two = arr[i].split(END)
        if (two.length === 1) ret += arr[i]
        else ret += model[two[0]] + two[1]
      }
      return ret
    }

    //把{{name}}等变量替换成model中对应的数据
    function render(node) {
      var arr = node.textContent.split(START)
      if (!arr.length) return
      var ret = ''
      for (var i = 0; i < arr.length; i++) {
        var two = arr[i].split(END)
        if (two.length === 1) ret += arr[i]
        else {
          ret += model[two[0]] + two[1]

          model2sync[two[0]].push({ //保存属性结点和属性值
            node: node,
            raw: node.textContent
          })
        }
      }

      node.textContent = ret
    }
  }

  function on(el, events, handler) {
    if (Array.isArray(events)) {
      each(events, function () {
        on(el, this, handler)
      })
    }
    else el.addEventListener(events, handler, true)
  }

  function each(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
      fn.call(arr[i], i, arr[i])
    }
  }

  return MVVM
})