let http = require('http')
let url = require('url')
let querystring = require('querystring')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  let qs = querystring.parse(req.url.split('?')[1])
  let cbName = qs.jsonpCallback  // 这里写死了jsonpCallback
  console.log(qs)

  if (pathname === '/a' && cbName==='getData') { // 服务端指定回调函数名字
    let data = {"a": "我是服务端返回的"}  //数据一定不能放全局
    data = JSON.stringify(data);
    let callback = cbName + '(' + data + ')'

    //方案2： 后端设置cors允许跨域
    // res.writeHead(200, {'content-Type': 'text/plain', "Access-Control-Allow-Origin": "*"});

    res.writeHead(200, {'Content-Type': 'application/json:charset=utf-8'})
    res.end(callback)
  } else {
    res.end()
  }
}).listen(4097)