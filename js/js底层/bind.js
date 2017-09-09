// bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，
// 在调用新函数时，在任何提供之前提供一个给定的参数序列。

// bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。
if (Function.prototype.bind === undefined) {
  Function.prototype.bind = function (obj) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1); // bind自己传入的参数

    return function () { // 返回一个新的函数
      // 将类参数数组转换成真正的数组
      var innerArgs = Array.prototype.slice.call(arguments); // 绑定到其它函数传入的函数
      var allArgs = args.concat(innerArgs) // 将所有参数合并

      fn.apply(obj, allArgs);
    }
  }
}


// 偏函数， bind()的另一个最简单的用法是使一个函数拥有预设的初始参数。
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
