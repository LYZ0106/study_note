// 第一步新建XMLHttpRequest对象
function get_CORS_XHR(method, url) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) { // "withCredentials"只存在于XMLHttpRequest对象中
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest !== "undefined") {
    xhr = new XDomainRequest(); // XDomainRequest对象，兼容IE8,9
    xhr.open(method, url);

    xhr.withCredentials = true; // 允许发送cookie
    // 响应报文头部加上 Access-Control-Allow-Credentials: true

    xhr.send();
  } else {
    xhr = null;
  }

  return xhr;
}

var xhr = get_CORS_XHR('GET', 'http://example.com');