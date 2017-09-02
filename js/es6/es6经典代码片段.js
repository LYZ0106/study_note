// Symbol 独一无二的
var smb = Symbol('hello');

console.log(smb);
//console.log(''+smb); //Error
//console.log(1+smb);
console.log(String(smb));

/*----------------------------------------------------*/
var gen =function*(){
  yield 1;
  yield 2;
};

console.log(gen()[Symbol.iterator] ===gen());
console.log(gen()[Symbol.iterator]()[Symbol.iterator] ===gen()[Symbol.iterator]);

console.log('===');
console.log(...gen());
console.log(...gen()[Symbol.iterator]());
console.log(...gen()[Symbol.iterator]()[Symbol.iterator]());

console.log(Object.getOwnPropertyNames(gen().__proto__.__proto__));


/*----------------------------------------------------*/
class A{
  say(){
    console.log("123");
  }
}

let B =A;
A =null;

let b =new B();
b.say();

let a =new A();
a.say();

/*----------------------------------------------------*/
class A {
  constructor() {
    console.log('123')
  }
}

class B extends A {
  constructor() {
    //子类B的构造函数之中的super()，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。
    super()
    return {}
  }
}
console.log(new B);


/*---------------------------------------------------------*/
/*
* num === num+1
请问在什么条件下上面的表达式会返回true？
答案是2个：

IEEE 754存储的整数开始重用二进制时
大浮点数
* */

var num1 =Math.pow(2,53);
var num2 =Math.pow(2,53)+1;

console.log(num1);
console.log(num2);

console.log(num1 ===num2);
console.log(Math.pow(2,53) ===Math.pow(2,53)+1);
console.log(num1+1 ===num1);

console.log('---------------------------');

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(num1));
console.log(Number.isSafeInteger(num1-1));
console.log(Number.isSafeInteger(Math.pow(2,53)));

/*------------------------------------------------------------------*/
var arrayLike ={
  0:'a',
  1:'b',
  3:'ytre',
  length:2,
  *[Symbol.iterator](){
    yield this[0];
    yield this[1];
    yield this[3];
  },
};

console.log(Array.from(arrayLike));