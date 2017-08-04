function Father(money) {
  this.money = money
}
Father.prototype.buyCar = function (num) {
  return '父亲的方法 has buy' + num + ' car'
}

function Son(money) {
  // 仅有此次调用父类
  Father.call(this, money)
}

// 寄生组合式，不必为了子类型的原型而调用父类的构造函数
function extend(subClass, superClass) {
  function F() {
  }

  F.prototype = superClass.prototype
  var superC = new F() //父类的实例 创造对象

  //函数创建时，已有原型的constructor，对prototype重新赋值时，重新指定constructor属性。
  superC.constructor = subClass   //增强对象
  subClass.prototype = superC     //指定对象
}

extend(Son, Father)
var a = new Son()
console.log(a.buyCar(780))
