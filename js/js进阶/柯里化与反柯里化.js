/*
 手动柯里化
function curryIt(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn.call(this, a, b, c)
      }
    }
  }
}
*/

/*
// 规定每次只传入一个参数
function curryIt(fn) {
    var length = fn.length,
        args = [];
    var result =  function (arg){
        args.push(arg);
        length --;
        if(length <= 0 ){
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
}
*/

/*
 * 柯里化(Currying): 一个函数中首先填充几个参数,然后再返回一个新函数

 * 也称部分求值(函数分步传递参数)，每次传递参数后部分应用参数，返回一个更具体的函数接受剩下的参数，
 * 中间可嵌套多层这样的接受部分参数函数，逐步缩小函数的适用范围，逐步求解, 直至返回最后结果。

 * 作用:
 * 1 延迟执行某个函数(惰性加载函数)
 * 2 部分求值
 * 3 固定易变因素。
 * 柯里化特性决定了它这应用场景。提前把易变因素，传参固定下来，生成一个更明确的应用函数。
 * 最典型的代表应用，是bind函数用以固定this这个易变对象。
 */

// 特点: 闭包保存参数，函数进行递归
let curryIt = function (fn) {
  let args = [].slice.call(arguments, 1);
  return  function cb() {
    if (!arguments.length) { //参数长度为0输出结果, 延迟计算
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments);
      return cb  // 参数长度未到达到fn的参数 继续调用函数
    }
  }
}

function fn(...arg) {
  return arg.reduce((a, b) => a * b)
}
let ret = curryIt(fn, 1, 1, 1)(1)(2)(3)(7)();
console.log(ret)


//  惰性加载函数: 跨浏览器事件注册，兼容ie事件注册
var addEvent = function (ele, type, fn) {
  if (window.addEventListener) {
    return ele.addEventListener(type, fn, false);
  } else if (window.attachEvent) {
    return ele.attachEvent(type, fn);
  }
};

// 柯里化后
var addEvent = function (ele, type, fn) {
  if (window.addEventListener) {
    addEvent = function (ele, type, fn) {
      ele.addEventListener(type, fn, false);
    }
  } else if (window.attachEvent) {
    addEvent = function (ele, type, fn) {
      ele.attachEvent(type, fn);
    }
  }
  addEvent(ele, type, fn);
}



/************************  反柯里化(uncurrying) *************************/
/*
 作用：扩大函数的使用性
 让对象去借用原本不属于自己的方法。使本来作为特定对象所拥有的功能函数可以被任意对象所用,
 类似于js中的：通过call，apply绑定this的指向
 把obj.func(arg1,arg2...)转化成函数式的调用方式func(obj,arg1,arg2....)
* */
Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments)
  }
};

// 或者
Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    return Function.prototype.call.apply(self, arguments);
  };
};

// 或者
Function.prototype.uncurrying = function () {
  return this.call.bind(this);
};

// 把属于数组原型对象的函数转化为一个普通的函数，实现相同的功能。
// 比如说，实现一个slice()函数：
var slice = Array.prototype.slice.uncurrying();
var a = [1, 2, 3];
console.log(slice(a, 1));  // [2,3]


//示例
var obj = {};
var push = Array.prototype.push.uncurrying();
push(obj, '1232')
console.log(obj) //{ '0': '1232', length: 1 }

