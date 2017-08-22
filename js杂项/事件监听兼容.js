//跨浏览器事件处理程序
var eventUtil = {
  // 添加句柄
  addHandler: function(element, type, handler){
    if(element.addEventListener){
      element.addEventListener(type, handler, false);
    }else if(element.attachEvent){
      element.attachEvent('on' + type, handler);
    }else{
      element['on' + type] = handler;
    }
  },

  // 删除句柄
  removeHandler: function(element, type, handler){
    if(element.removeEventListener){
      element.removeEventListener(type, handler, false);
    }else if(element.detachEvent){
      element.detachEvent('on' + type, handler);
    }else{
      element['on' + type] = null;
    }
  }
};

var oBtn = document.getElementById('btn');
function evtFn(){
  alert('hello world');
}
eventUtil.addHandler(oBtn, 'click', evtFn);
eventUtil.removeHandler(oBtn, 'click', evtFn);