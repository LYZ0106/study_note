/*
* jsonp是非官方协议，由于浏览器同源策略，ajax只允许请求当前源（域名、协议、端口）的资源，
* 跨域请求：服务端集成Script返回至客户端，在服务端输出JSON数据并执行回调函数
*
* 1、客户端创建script标签
* 2、发起请求：对src赋值 (http://example.com/api/?callback=jsonpCallback ）
*    当固定回调函数名字时，客户端和服务器端的名称一定要一致
* 3、数据响应：服务器端把该函数和数据拼成字符串返回
*
*************  提醒： jsonp跟ajax没关系！只是jq把它们放一起方便  ***********
*/

/*
 function jsonp(url) { //最简单
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}
*/

/*
* @param url 跨域请求的地址
* @param data 请求参数
* @param opts 设置回调函数的名称 todo
* */

// jsonp(url, data, opts)

let jsonp = function (url, data) {
  let script = document.createElement('script')
  let refChild = document.getElementsByTagName('script')[0] || document.head

  // script标签的src只在第一次设置时起作用，为了重用，每次完成操作之后要移除
  script.onload = function () {
    document.body.removeChild(script);
  };

  // url上附带请求参数
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  script.src = url
  refChild.parentNode.insertBefore(script, refChild)
}


function param(data) {
  let req = ''
  for (let key in data) {
    req += '&' + key + '=' + encodeURIComponent(data[key])
  }
  return req ? req.substring(1) : ''
}