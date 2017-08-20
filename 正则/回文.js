let str='123ere321'

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();  // 匹配一个非单字字符。
  return (str === str.split('').reverse().join(''));
}

console.log(isPalindrome(str))