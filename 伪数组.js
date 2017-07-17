var arr = [1, 2, 3, 4]

function isArray(obj) {
  // 使用toString()方法来检测对象类型 ,返回一个表示该对象的字符串
  // 在自定义对象中未被覆盖，toString() 返回 "[object type]"
  return Object.prototype.toString.call(obj) === '[object Array]';
}

function transFromArray(obj) {
  if (Array.from) {
    return Array.from(obj)
  } else {
    return Array.prototype.slice.call(obj)
  }
}

function s(a, b, c) {
  var arg = transFromArray(arguments)
  var arg2 = transFromArray(arguments)
  console.log(isArray(arguments))
  console.log(isArray(arg2))
}

s()
