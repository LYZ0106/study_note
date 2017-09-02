function F(name) {
  this.name = name
}

function _new(F) {
  //当Js引擎执行new操作时，会马上开辟一个块内存，创建一个空对象（并将this指向这个对象）。
  var obj = {}

  //每个函数中都会有一个叫prototype的属性，类型是object，即一个引用对象。
  //每个对象中都会有一个叫__proto__的属性，类型是object，也是一个引用对象。
  // __proto__  属性是一个访问器属性（一个getter函数和一个setter函数）,暴露了通过它访问的对象的内部[[Prototype]] (一个对象或 null)。
  obj.__proto__ = F.prototype

  //让F中的this指向instance，执行F的函数体。
  var result = F.call(obj)


  // （1）没有写return，相当于return undefined，undefined是值类型的，因此丢弃它，返回instance。
  // （2）return this相当于返回一个引用类型的对象，自己就是instance
  // 若A返回是一个Object类型(非原始类型string,boolean,number,null,undefined类型）,则直接返回A的返回值,
  // 否则把第1步new的Object返回出去.(默认情况下,JS中函数默认返回值是undefined)
  return typeof result === 'object' ? result : obj
}

// （3）对instance并不需要设置它的constructor属性，这个属性在instance的原型中。
//在对prototype重新赋值的时候，重新指定constructor属性。

var f = _new(F)
//var f = new F

f.name = '我是实例后的内容'
console.log(f.name)
