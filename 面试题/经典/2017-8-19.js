//查找对象的原型
function proto(object) {
  return !object ? null
    : '__proto__' in object
      ? object.__proto__ : object.constructor.prototype
}


/*-------------------------------------------------------------------------*/
var a = function b() {
  //命名函数表达式中函数名称  b 只能作为函数体作用域内的局部变量，外部不可访问
  console.log(a == b)
}

a();
b();  // b is not defined


/*-------------------------------------------------------------------------*/

// 如何获取光标的水平位置？
function getX(e) {
  e = e || window.event;
  // 先检查非IE浏览器，在检查IE的位置
  // pageX不属于任何公开的标准.
  return e.pageX || e.clentX + document.body.scrollLeft;
}


/*-------------------------------------------------------------------------*/

// 兼容浏览器的获取指定元素（elem）的样式属性（name）的方法
function getStyle(elem, name) {
  if (elem.style[name]) {
    //如果属性存在于style[]中，直接取
    return elem.style[name];
  } else if (elem.currentStyle) {
    //否则 尝试IE的方法
    return elem.currentStyle[name];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    //尝试W3C的方式
    name = name.replace(/([A-Z])/g, "-$1"); //W3C中为textAlign样式，转为text-align
    name = name.toLowerCase();

    var s = document.defaultView.getComputedStyle(elem, "");

    return s && s.getPropertyValue(name);
  } else {
    return null;
  }
}


/*-------------------------------------------------------------------------*/
var arr1 = "john".split(''); //j o h n
var arr2 = arr1.slice().reverse(); //n h o j
var arr3 = "jones".split(''); //j o n e s
//arr2.push(arr3);

// reverse() 会改变原数组
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


/*-------------------------------------------------------------------------*/
["1", "2", "3"].map(parseInt) //[1,NaN,NaN]


function parseInt(str, radix) {
  return str+'-'+radix;
}
var a=["1", "2", "3"];
a.map(parseInt);  // ["1-0", "2-1", "3-2"] 不能大于radix
// parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，
// radix 要解析的数字的基数。【该值介于 2 ~ 36 之间，并且字符串中的数字不能大于radix才能正确返回数字结果值】;
// map 传了3个(element,index,array)，对应的 radix 不合法导致解析失败。



/*-----------------------------------------------------------------------*/
//请问下面哪种方式可以在不改变原来数组的情况下，拷贝出数组b, 且满足b !== a。
// 例如数组
let a = [1, 2, 3]
let b = a; // 值相同
let b1 = a.slice();   //  返回新数组对象 内存地址不同
let b2 = a.concat();  // 返回一个新数组。

console.log(b === a)
console.log(b1 === a)
console.log(b2 === a)



