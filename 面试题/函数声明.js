/*
* 函数声明只能出现在程序或函数体内。从句法上讲，不能出现在Block（块）（{ … }）中，
* 例如:不能出现在 if、while 或 for 语句中。Block（块）中只能包含Statement语句，
* 而不能包含函数声明这样的源元素。
*
* 允许让表达式出现在Block（块）中情形，就是让它作为表达式语句的一部分。
* 规范规定: 表达式语句不能以关键字function开头。
* 函数表达式: 不能出现在Statement语句或Block（块 , 由Statement语句构成的)
* */

var x = 1;
if (function f() {
  }) { // todo 变成表达式？
  x += typeof f;
}
x; // => 1undefined



var x = 1;
// 相当于这样  但当f= function () {}变成函数表达式式，=>  1undefined
if (function () {
  }) {
  x += typeof f;
}
console.log(x);


/*---------------------------------------------------------------------*/
(function f() {
  function f() {
    return 1;
  }

  return f();

  function f() {  // 该函数声明，移到前面，覆盖之前的f
    return 2;
  }
})();
