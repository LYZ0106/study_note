/*  给定一个整数n，输出小于该整数n的fibonacci数列 */

// 动态规划,用一个数组建一张表，存放被分解成众多子问题的解
// 当算法执行完，在表中找到最解
// 从底部开始解决问题，将所有小问题解决，然后合并成整体的解决方案，从而解决掉整个大问题。

function fibonacci(num) { // 迭代实现
  let prev = 1;
  let middle = 1;
  let next = 2; //初始值的next 从第三项起
  let arr = [1, 1]; //初始表

  if (num === 0 || num === 1) return arr = null
  if (num === 2) return arr = [0, 1, 1]

  while (next < num) {
    arr.push(next);
    prev = middle;
    middle = next;
    next = prev + middle;
  }

  return arr
}

// 1、1、2、3、5、8、13
console.log(fibonacci(5))

// 解法2
function getFibonacci(n) {
  var fibarr = [];
  var i = 0;
  while (i < n) {
    if (i <= 1) {
      fibarr.push(i);
    } else {
      fibarr.push(fibarr[i - 1] + fibarr[i - 2])
    }
    i++;
  }
  return fibarr;
}


/*--------- 递归 ------------*/
function getfib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n > 1) return getfib(n - 1) + getfib(n - 2);
}

function fibo(len) {
  var fibo = [];
  for (var i = 0; i < len; i++) {
    fibo.push(getfib(i));
  }
  return fibo;
}



/*----------------------------- 计算fibonacci和 -----------------------------------*/

// 递归实现
function fn(x) {
  if (x === 0 || x === 1) return 1; //退出递归的条件, 以保证在有限次递归后能够得到结果
  return fn(x - 1) + fn(x - 2);    //转化为更为基本的情况, 重复调用自身进行计算
}

console.log(fn(5))

/*-------------------------------------------------------------------*/
/**
 *@desc: fibonacci
 *@param: count {Number}
 *@return: result {Number} 第count个fibonacci值，计数从0开始
 fibonacci数列为：[1, 1, 2, 3, 5, 8, 13, 21, 34 …]
 则getNthFibonacci(0)返回值为1
 则getNthFibonacci(4)返回值为5
 */

// n=n-1  +  n-2 (n从0开始 n>2)
// 1、1、2、3、5、8、13
function getNthFibonacci(count) {
  let result = [1, 1]
  let pre = 1
  let mid = 1
  let next = 2

  for (let i = 0; i < count; i++) {
    next = pre + mid
    pre = mid
    mid = next
    result.push(next)
  }

  return result[count]
}

let ret = getNthFibonacci(2)
console.log(ret)