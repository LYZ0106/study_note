
var foo = function() {
  var t = new Date();
  foo = function() {
    return t;
  };
  return foo();
};


//DOM 事件添加中，为了兼容现代浏览器和 IE 浏览器，我们需要对浏览器环境进行一次判断：

// 简化写法
function addEvent (type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  }
  else if(window.attachEvent){
    el.attachEvent('on' + type, fn);
  }
}
//问题在于我们每当使用一次 addEvent 时都会进行一次判断。

//利用惰性函数，我们可以这样做：

function addEvent (type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false);
    }
  }
  else if(window.attachEvent){
    addEvent = function (type, el, fn) {
      el.attachEvent('on' + type, fn);
    }
  }
}