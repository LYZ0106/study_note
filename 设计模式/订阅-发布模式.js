/*
 * 订阅者模式涉及三个对象：主题对象、订阅者、发布者
 * 它定义一对多的关系，让多个订阅者对象同时监听一个主题对象
 * 每当主题对象状态发生改变时，其相关依赖对象都会得到通知，并被自动更新

  简单说:
     ，主题对象维护一个数组，把几个函数推入数组中待用
     发布，执行缓存在数组中的函数列队


  由主题和观察者，主题负责发布事件
  观察者通过订阅这些事件来观察该主体，
  发布者和订阅者是完全解耦的，两者仅仅共享一个自定义事件的名称。


  比如在一个按钮上绑定click事件，这其实就是个订阅的过程；而何时触发，就是发布。
  但大家只是知道有这么回事就行，没有任何实用价值。
  因为通过鼠标或手指点击的发布动作是浏览器封装好的，我们其实只看见了订阅过程，
  这对整个模式的理解毫无用处。

  另外需要明确的一点就是：订阅发布不等于监听！很多人聊起这个模式，
  都会不经意的蹦出监听这个字眼，因为观察者么，观察和监听概念上差不多，
  这对初学者很容易造成理解上的混乱。


 */

function Dep() {    //主题对象
  this.subs = []    //订阅者列表
}

Dep.prototype = {
  addSub: function (sub) {
    this.subs.push(sub)
  },
  notify: function () {                  //主题对象通知订阅者
    this.subs.forEach(function (sub) {  //遍历所有的订阅者，执行订阅者提供的更新方法
      sub.update()
    })
  }
}

function Sub(n) { //订阅者
  this.n = n;
}

Sub.prototype = {
  update: function () { //订阅者更新
    this.n = this.n + 1;
    console.log(this.n);
  }
}

//发布者 即数据的来源
function pub() {
  dep.notify()
}


var dep = new Dep()
//新增 3 个订阅者
dep.addSub(new Sub(1))
dep.addSub(new Sub(2))
dep.addSub(new Sub(3))

pub() //发布者发布更新
