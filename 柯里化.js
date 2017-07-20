/*
// 手动柯里化
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

// 柯里化通常也称 部分求值 ，其含义是给函数 分步传递参数，每次传递参数后,部分应用参数，并返回一个更具体的
// 函数接受剩下的参数，中间可嵌套多层这样的接受部分参数函数，逐步缩小函数的适用范围，逐步求解,直至返回最后结果。
// 柯里化的转换过程：把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
// 如果其他的参数是必要的，返回接受余下的参数且返回结果的新函数。
var fn = function (a, b, c) {
  return a + b + c
};


//只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
function curryIt(fn) {
  var args = [];         // 将参数存入数组
  var len = fn.length;   //当前函数的参数长度

  return result = function (arg) {
    args.push(arg)
    //当返回参数达到fn的长度时，输出结果。 这样就实现了函数柯里化的延迟计算
    if (len === args.length) {
      return fn.apply(this, args);
    } else {
      return result  // 参数未到达到fn的参数 继续调用函数
    }
  }
}

var ret = curryIt(fn)(1)(2)(3);
console.log(ret)
