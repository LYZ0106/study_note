console.log([0, 1, 2, 3, 4].some(Number)) // true
console.log([0, 1, 2, 3, 4].map(Number)) // [ 0, 1, 2, 3, 4 ]
console.log([0, 1, 2, 3, 4].forEach(Number)) // undefined
console.log([0, 1, 2, 3, 4].every(Number)) // false todo


/*--------------------------------------------------------------------*/
//下面的递归代码在数组列表偏大的情况下会导致堆栈溢出。在保留递归模式的基础上，
// 你怎么解决这个问题？
var list = readHugeList();
var nextListItem = function () {
  var item = list.pop();

  if (item) {
    // nextListItem();
    //潜在的堆栈溢出可以通过修改nextListItem 函数避免：
    setTimeout(nextListItem, 0);
  }
};

// 堆栈溢出之所以会被消除，是因为事件循环操纵了递归，而不是调用堆栈。
// 当 nextListItem 运行时，如果 item不为空，timeout函数（nextListItem）
// 就会被推到事件队列，该函数退出，因此就清空调用堆栈。当事件队列运行其timeout事件，
// 且进行到下一个 item 时，定时器被设置为再次调用 nextListItem。因此，
// 该方法从头到尾都没有直接的递归调用，所以无论迭代次数的多少，调用堆栈保持清空的状态。



/*-------------------------------------------------------------------*/
var a = {},
  b = {key: 'b'},
  c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456
//当设置对象属性时，JavaScript会暗中字符串化参数值。在这种情况下，由于 b 和 c都是对象，
//因此它们都将被转换为"[object Object]"。结果就是，a[b]和a[c]均相当于a["[object Object]"]，
//并可以互换使用。因此，设置或引用 a[c]和设置或引用 a[b]完全相同。





