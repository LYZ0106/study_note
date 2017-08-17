var str = 'rattler'

//利用()进行分组，使用斜杠加数字表示引用，\1就是引用第一个分组，

function containsRepeatingLetter(str) {
  var reg = /([a-zA-Z])\1/
  return reg.test(str)
}

var ret = containsRepeatingLetter(str)
console.log(ret)


/*-------------------------------------------------------------------*/
// 字符串中出现次数最多的字符
var str1 = 'kkkkkkkaaakkkkkkaaaaasddd';

function most(str) {
  var arr = str.split('').sort()
  str = arr.join('')

  var reg = /(\w)\1+/g;
  var num = 0;
  var value = ''

  str.replace(reg, function ($0, $1) {//这里的$0就是找到的重复的整体
    if (num < $0.length) {
      num = $0.length;
      value = $1;
    }
  })

  return '出现次数最多的字符是' + value + '出现了' + num + '次';
}

console.log(most(str1));



