// 9007199254740991是js的'MAX_SAFE_INTEGER'
// -9007199254740991是'MIN_SAFE_INTEGER'，
// 实现大数相加

// 原理: 从右往左遍历相加，有进位的就把左边的数加1
function add(a, b) {
  a = a.split('');
  b = b.split('');

  let carry = 0, result = '';

  while (a.length || b.length || carry) { // 进位

    // 位数不够补0, 同时加上上次运算进位的数 1
    let temp = parseInt(a.pop() || 0) + parseInt(b.pop() || 0)+carry;
    carry = Math.floor(temp / 10);
    result = temp % 10 + result;
  }

  return result
}


var ret = add('39000', '9000');
console.log(ret)