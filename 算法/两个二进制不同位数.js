// 给出n(n < 1000)个数，求任意两个数之间二进制表示位数不同的数量之和。
/*
* // 转化为二进制
console.log((4 >>> 0).toString(2))

function countBits(nums) {
  var ret = [0];
  for (var i = 1; i <= nums; i++) {
    ret.push(ret[i & i - 1] + 1);
  }
  return ret;
}
console.log(countBits(5));
* */

let len = 3
let arr =[1,2,3]
let result = 0

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    let tem = arr[i] ^ arr[j]
    result += _get(tem)
  }
}

function _get(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (((1 << i) & n) !== 0) {
      count++;
    }
  }
  return count;
}

console.log(result)
