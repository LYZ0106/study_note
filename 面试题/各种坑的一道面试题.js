var getName
function Foo() {
  // 这里的getName是赋值，修改外层console.log (4)语句=>修改全局
  getName = function () { console.log (1); };
  // 返回window全局
  // 构造函数的this
  return this;
}
function getName() { console.log (5);}
Foo.getName = function () { console.log (2);}; // 静态属性
Foo.prototype.getName = function () { console.log (3);};
getName = function () { console.log (4);};


//请写出以下输出结果：
Foo.getName();  //2
getName(); //4
Foo().getName(); //1
// 上一问返回window。getName修改全局
getName(); // 1

// 运算符优先级  (.)成员访问 = new(带参数列表) > new(无参数列表) > 函数调用
new Foo.getName();// new (Foo.getName)()  2

// new Foo()实例没有getName()方法，但原型上有
new Foo().getName();//3    (new Foo()).getName()
new new Foo().getName();//3   new ((new Foo()).getName)()


/*
 function F() {
 this.name='我是实例上的'
 }
 F.prototype.name='我是原型上的'

 var f=new F()
 console.log(f.name)
 */