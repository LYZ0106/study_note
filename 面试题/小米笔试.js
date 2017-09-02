var foo = function (m, n) {
  console.log(n);

  return { // 返回给外界函数调用执行的公有方法
    foo: function (o) {
      console.log(o);
      return foo(o, m); // 返回全局的函数foo 第一次传入时 1 ，由于闭包，m=1没有被销毁
    }
  }
}

//问题一:
var result = foo(1); //   undefined： 没有传入 n
result.foo(2); //   2：外界调用foo打印出来的   1：上一步方法里返回执行 foo(2, 1)
result.foo(3); //   3    1： 由于闭包,参数和变量不会被垃圾回收机制回收
result.foo(4); //   4    1： 同理


// 方法返回值就是自身对象
//问题二:
var result = foo(2)  // undefined
  .foo(3)    // 3：(调用方法foo打印)   2：(返回执行foo匿名函数打印)
  .foo(4)    // 4，3 同理，m=2被改写了=>m=3 公有方法foo永远不销毁，永远可以访问
  .foo(5);   // 5，4


//问题三:
var result = foo(1);  // undefined
result.foo(2).foo(3); // 2,1   3,2    result.foo(2)开辟新的内存空间
result.foo(4).foo(5); // 4,1   5,4    上一步操作不会修改 1 ：

