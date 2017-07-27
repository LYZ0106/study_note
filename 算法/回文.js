/*
 * 将字符串里的字母拼凑成一个回文，每个字母只能用一次,输出一个整数,即最少的回文串个数。
 */

var str = 'bbaavy'

function getMin(str) {
  var arr = String(str).split('')
  if (arr.length <= 0) return 0

  // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值
  // new Set()作为第一次调用回调函数的第一个参数
  return arr.reduce(callback, new Set()).size || 1
}

// arr.reduce((set, s) => set.delete(s) ? set : set.add(s), new Set()).size || 1

function callback(previousVal, currentVal) {
  if (previousVal.delete(currentVal)) {
    console.log(previousVal)
    return previousVal
  } else {
    return previousVal.add(currentVal)
  }
}

var ret = getMin(str)
console.log(ret)


/**************************************/

// 偶数的任意字母都可以对称，主要是找出奇数的字母有多少种
function getMin2(str) {
  let count = 0;
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) hash[str[i]] = 1
    hash[str[i]] += 1
  }

  for (let key in hash) {
    if (hash[key] % 2 !== 0) count += 1
  }
  return count
}