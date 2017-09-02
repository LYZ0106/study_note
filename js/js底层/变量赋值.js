/********************************* 函数传参赋值 *******************************/
function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";  // 形参b ，变量，代理内存地址，访问里边的东西，从而修改实参

  c = 'bb';  // 修改形参, 相当于内部赋值  不影响实参
  // c = {item: "unchanged"};
  return c  //
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);
console.log(changeStuff(num, obj1, obj2))
/*
 调用函数传参时，函数接受对象实参引用的副本
 (既不是按值传递的对象副本，也不是按引用传递的隐式引用)。
 它和按引用传递的不同在于：在共享传递中对函数形参的赋值，不会影响实参的值。
 按共享传递的直接表现就是上述代码中的 obj1，
 当我们在函数内修改了 b 指向的对象的属性值时，
 我们使用 obj1 来访问相同的变量时同样会得到变化后的值。
*/

console.log(num);        //10
console.log(obj1.item);  //changed
console.log(obj2.item);  //unchanged
console.log(obj2)





/********************************* 连续赋值 *******************************/
  // js中永远是按值传递，只不过当我们传递的是某个对象的引用时，这里的值指的是对象的引用
var a = {n: 1};    // 字面量对象，按引用传递
var b = a;         // b 引用了内存地址
console.log(b===a) // true
console.log(b)
console.log('-----------------------------------------')

// . 的优先级高于 = ， 先在a的地址上申请新的x地址
// 同时因为 b 共享了a（改变前）的内存地址，所以b有了x
a.x = a = {n: 2};

console.log(b===a) // false
console.log(b)     // { n: 1, x: { n: 2 } }
console.log(a);    // --> {n:2}

console.log('-----------------------------------------')
console.log(a.x); // --> undefined 变量 a 指向{n: 2}新的内存地址，此时a里根本没有x
console.log(b.x); // --> {n:2}


/*
等价于
a.x = (a = {n:2});

// 连续赋值中，值是直接赋给变量指向的内存地址：
// 先在a的地址上申请新的x地址,然后a的地址改变,x没有引用,也就undefined了
//        a.x  =  a  = {n:2}
//        │       │
//{n:1}<──┘       └─>{n:2}


*/