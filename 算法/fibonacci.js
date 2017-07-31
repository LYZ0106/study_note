/*
* 给定一个整数n，输入小于该整数n的fibonacci数列
* */

// 动态规划,用一个数组建一张表，存放被分解成众多子问题的解
// 当算法执行完，在表中找到最解
// 从底部开始解决问题，将所有小问题解决，然后合并成整体的解决方案，从而解决掉整个大问题。

function fibonacci(num) {
  let prev = 1;
  let middle = 1;
  let next = 1;
  let arr = [];
  if (num === 1) {
    return arr = [0, 1, 1]
  }

  for (let i = 2; i < num; i++) {
    if (next <= num) {
      arr.push(next);
      next = prev + middle;
      prev = middle;
      middle = next;
    }
  }

  return arr
}

// 0、1、1、2、3、5、8、
console.log(fibonacci(2))  // 55