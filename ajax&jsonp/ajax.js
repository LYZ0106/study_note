function ajax(obj) {
  obj = obj || {};
  let method = ( obj.method || "GET").toUpperCase();
  let url = obj.url || '';
  let async = obj.async || true;
  let success = obj.success || '';
  let error = obj.error || '';
  let data = obj.data || {};

  let xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
  xhr.onreadystatechange = function () { // 接收对方回信后的回调函数
    let status = xhr.status;

    if (xhr.readyState === 4) {
      if (status >= 200 && status < 300) {
        let response = '';
        let type = xhr.getResponseHeader('Content-type'); // 判断接受数据的内容类型

        if (type.indexOf('xml') !== -1 && xhr.responseXML) {
          response = xhr.responseXML; //Document对象响应
        } else if (type === 'application/json') {
          response = JSON.parse(xhr.responseText); //JSON响应
        } else {
          response = xhr.responseText; //字符串响应
        }

        success && success(response);
      } else {
        error && error(status)
      }
    }
  };

  if (method === 'GET') { // 把data转化作为url参数
    xhr.open('GET', url + param(data), async);
    xhr.send(null)
  } else if (method === 'POST') { //post需要在头中添加content-type
    xhr.open('POST', url, async);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send(JSON.stringify(data))
  }
}

function param(data) {
  let req = '?';
  let val;

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      val = data[key] !== undefined ? data[key] : ''
      // encodeURIComponent 转义除了字母、数字 、 . ! ~ * '-和_之外的所有字符。
      req += `${key}=${encodeURIComponent(val)}&`
    }
  }
  return req = req.slice(0, -1)
}