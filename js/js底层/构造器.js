function F() {
}
// 构造函数F自己没有constructor属性
console.log("-------------- 构造函数F自己的constructor属性 ----------------");
console.log(F.hasOwnProperty('constructor'));
console.log(" ");

// 构造函数F的原型对象有constructor属性
console.log("-------------- 构造函数F的原型对象constructor属性 ----------------");
console.log(F.prototype.hasOwnProperty('constructor') === true);
console.log(F.prototype.constructor === F);
console.log(" ");

var f = new F

// 实例f的构造器是 F
console.log("-------------- 实例f的构造器是 F ----------------");
console.log(f.constructor === F);
console.log(f.__proto__===F.prototype);
console.log(F.hasOwnProperty('constructor'));
console.log(" ");

/*
 * 任意一个新函数在创建时，原型的constructor就已经设置好了。
 * 对instance并不需要设置它的constructor属性，这个属性在instance的原型中。
 */
// 实例f自己没有构造器属性
console.log("-------------- 实例f自己构造器属性 ----------------");
console.log(f.hasOwnProperty('constructor'));
console.log(f.__proto__.hasOwnProperty('constructor'));
console.log(" ");

console.log(" ----------------------------- 对prototype重新赋值时 -----------------------------------");
function G() {
}
F.prototype = new G;
console.log(F.prototype.constructor === F);
console.log(F.prototype.constructor === G);

//在对prototype重新赋值时，重新指定constructor属性。
F.prototype.constructor = F;
console.log(F.prototype.constructor === F);
