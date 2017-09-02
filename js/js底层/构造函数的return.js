/*
 new f();
 1 创建空对象。
 2 将类的prototype中的属性和方法复制到实例中。
 3 将第一步创建的空对象做为类的参数调用类的构造函数
 */

function f() {
  return f; // 期望返回的是实例对象，但是这里却返回自己
}

new f() instanceof f;