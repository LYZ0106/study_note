function Father(money) {
  this.money = money
}

Father.prototype.buyCar = function (num) {
  return '父亲的方法 has buy' + num + ' car'
}

function Son(money) {
  Father.call(this, money) // 仅有此次调用父类
}

// 寄生组合式，不必为了子类型的原型而调用父类的构造函数
//  替代subClass.prototype = new superC()
function extend(subClass, superClass) {
  function F() {}
  F.prototype = superClass.prototype
  var superC = new F() //父类的实例    创造对象

  // IE9+， Object.create创建父类的实例
  // var superC= Object.create(superClass.prototype)
  //函数创建时，已有原型的constructor，对prototype重新赋值时，重新指定constructor属性。
  superC.constructor = subClass    // 增强对象
  subClass.prototype = superC      // 指定对象
}

extend(Son, Father)
var a = new Son()
console.log(a.buyCar(780))
