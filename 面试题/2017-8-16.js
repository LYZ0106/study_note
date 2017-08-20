// documen.write和 innerHTML的区别
// document.write只能重绘整个页面
// innerHTML可以重绘页面的一部分


/*----------------------------------------------------------------------*/

// 判断一个质数， 考察：js不能信任传递来的数据类型。
// 如果面试官没有明确地告诉你，你应该询问他是否需要做输入检查，还是不进行检查直接写函数。
// 严格上说，应该对函数的输入进行检查。
function isPrime(number) {
  // Number.isInteger() 方法用来判断给定的参数是否为整数。
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) return false;

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  // Math.sqrt() 函数返回一个数的平方根
  var squareRoot = Math.sqrt(number);
  // for (var i = 3; i <= squareRoot; i += 2) {
  if (number % squareRoot === 0) return false
  // }
  return true;
}

console.log(isPrime(7))


/*----------------------------------------------------------------------*/
// 问执行完毕后 x, y, z 的值分别是多少？
// 考察 函数声明，函数的返回i值
var x = 1, y = z = 0;

function add(n) {
  n = n + 1;
  // return n  函数应该有返回值
}

y = add(x);

function add(n) {
  n = n + 3;
}

z = add(x);


/*----------------------------------------------------------------------*/
// 避免重写可能已经定义了的方法。通过在定义自己的方法之前，检测方法是否已经存在。
String.prototype.repeatify = String.prototype.repeatify || function (num) {
  let result = ''
  for (let i = 0; i < num; i++) {
    result += this
  }
  return result
}

console.log('hello'.repeatify(3)); // 实现这样

// 或者
function repeatStringNumTimes(string, times) {
  return times > 0 ? string.repeat(times) : "";
}


/*----------------------------------------------------------------------*/

/*假设：一个英文字符占用一个字节，一个中文字符占用两个字节*/
function getBytes(str) {
  let len = 0

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      len += 2
    } else {
      len += 1
    }
  }
  return len
}

getBytes("玩as778")


/*-------------------------------------------------------------------*/
var y = 1, x = y = typeof x;
/*
 运算符 = 是左值运算符，从右往左读取， 相当于：
 var y = 1;
 y = typeof x;
 var x = y;
* */
console.log(x)


/*-----------------------------------------------------------*/
var foo = {
  bar: function () {
    return this.baz
  },
  baz: 1
};

var ret = (function () {
  // 拿到参数foo.bar，并执行 return this.baz，但此时的上下文环境是arguments
  return typeof arguments[0]()
})(foo.bar); // 传递的是参数

console.log(ret)



/*---------------------------------------------------------------------*/
/*
 * 注意返回类型
 * x = [,][1]； 取 x = typeof y = ‘undefind’ 是字符串类型
 * typeof 返回的是string类型 ，typeof typeof是’string’
 */

var x = [typeof x, typeof y][1];
//type是从有往左读取
typeof typeof x;   // => string


/*--------------------------------------------------------------*/
(function (foo) {
  return typeof foo.bar;
})({foo: {bar: 1}});

//参数foo={foo: {bar: 1}}
//typeof foo.bar