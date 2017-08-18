/*
* delete删除对象的属性
* delet 操作符与释放内存无关，内存管理通过断开引用间接完成
*
* 删除的
*
* */
let a = (function (x) {
  let s = {}

  var b = {p: '我是私有'}
  console.log(delete b)  // => false 对局部变量名不起作用

  Object.defineProperty(s, 'o', {
    configurable: true, // false的时候不能删除
    enumerable: true,
    value: {r: '1'} // 数据描述符
  })

  //delete s.o;
  delete x        //   严格模式，抛出异常
  delete s.t      //   => true   删除的对象属性不存在
  console.log(s)
  return x;
})(1);

console.log(a)


var b = {p: '我是全局'}
console.log(delete b) //  使用 var/let/const 定义的全局不能删除

c = {p: '我是全局'}
console.log(delete c) //  c是全局 想当于window.c，但没有用var/let/const 定义 ,可以删除

