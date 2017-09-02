/**
 * 过滤XSS的非法字符
 * @method filterScript
 * @param {String} str 需要进行过滤的字符串
 * @return {String} [过滤后的字符串]
 */
function filterScript(str) {
  var text = document.createTextNode(str),
    parser = document.createElement("div"),
    value = "";

  parser.appendChild(text);
  value = parser.innerHTML;
  text = null;
  parser = null;
  return value;
}