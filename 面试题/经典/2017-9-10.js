// 实现模板引擎
function template(str) {
  var reg = /<%([^%>]+)?%>/g
  var match = reg.exec(str)
  return function (data) {
    return str = str.replace(match[0], data[match[1]])
  }
}

var compiled = template('Hello, my name is <%name%>');
console.log(compiled({'name': "Krasimir"}));