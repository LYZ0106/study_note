// 算出它有多少个子串是偶串吗？
var str = '1122ii'

var obj = {'0': 1}; // '0' 是初始化二进制数据
var gp = 0;
var result = 0;

for (var i = 0; i < str.length; i++) {
  // 跟上一个结果异或得 0 ，只要出现相同的二进制数得 0 。 表示一个字串是偶串
  gp ^= 1 << str.charCodeAt(i);
  console.log(gp)

  if (!obj[gp]) {
    obj[gp] = 1 // 先将每个字符塞入hash表中作标记
  } else {
    result += obj[gp]; // 1 2        个偶串  todo
    obj[gp]++;  // 2 3             个0
  }
}
console.log('---------------------')
console.log(result)

console.log(obj)