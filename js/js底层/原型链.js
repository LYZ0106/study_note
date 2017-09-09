// 先有Object.prototype（原型链顶端），Function.prototype继承Object.prototype而产生，最
// 后，Function和Object和其它构造函数继承Function.prototype而产生。

// Object 自身是一个构造函数,是函数！函数都是继承自 Function。
console.log(Object instanceof Function);//true
console.log(Function instanceof Object);//true


// 对象__proto__属性的值就是它所对应的原型对象
// __proto__的读取器(getter)暴露了一个对象的内部 [[Prototype]]
console.log(typeof (Object.__proto__) === "function") // true
console.log(Object.__proto__) // [Function]
console.log(Object.prototype) // {} 顶端
console.log(Object.prototype.__proto__) // null
console.log({}.__proto__) // 这里的{}是一个实例对象

console.log('-----------------------------------------------------------')
console.log(Function.__proto__) // [Function]
console.log(typeof (Function.prototype)) // function
console.log(function () {}.__proto__) // [Function]
console.log(Function.prototype===function () {}.__proto__)  // true


// 通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性。
// 只有函数才有prototype属性？ES规范就这么定的。
console.log(Function.prototype.prototype)// undefined
