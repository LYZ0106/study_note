var str = 'rattler'

//利用()进行分组，使用斜杠加数字表示引用，\1就是引用第一个分组，

function containsRepeatingLetter(str) {
  var reg = /([a-zA-Z])\1/
  return reg.test(str)
}

var ret = containsRepeatingLetter(str)
console.log(ret)



