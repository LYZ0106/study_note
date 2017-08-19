/*
 获取 url 中的参数
 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回数组
* */
/*
  1. 匹配出   ?=?& 之间的结果  
  2. 需要返回对象, 则匹配结果用对象存储起来, res[b] = c
  3. 需要处理多个参数名称情况， 利用concat拼接 （concat返回的是数组副本）
  4. 需要考虑，输入了参数可是参数没对应， 与没传入 sKey 的情况

  用 void 0 代替 undefined,
  1、避免 undefined 被重写,
  2、压缩节省字节


replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。
* */

let url = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe"

function getUrlParam(url) {
  const reg = /(\w+)=(\w+)&?/g   //? 匹配&0次或一次
  let ret = {}

  url.replace(reg, ($0, $1, $2) => { // $0是模式的匹配项
    ret[$1] !== void 0 ? ret[$1] = [].concat(ret[$1], $2) : ret[$1] = $2
  })

  return ret
}

function getUrlParam(url, key) {
  const reg = /(\w+)=(\w+)&?/g
  let ret = {}

  url.replace(reg, ($0, $1, $2) => {
    ret[$1] !== void 0 ? ret[$1] = [].concat(ret[$1], $2) : ret[$1] = $2
  })

  return (key !== void 0) ? ret[key] || '' : ret
}

var ret = getUrlParam(url,'test');
console.log(ret);
