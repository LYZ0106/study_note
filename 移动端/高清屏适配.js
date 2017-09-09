var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');

var dpr = window.devicePixelRatio || 1;
var rem = docEl.clientWidth * dpr / 10;
var scale = 1 / dpr;


// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute(
  'content', 'width=' + dpr * docEl.clientWidth
  + ',initial-scale=' + scale
  + ',maximum-scale=' + scale
  + ',minimum-scale=' + scale
  + ',user-scalable=no'
);


docEl.setAttribute('data-dpr', dpr);
// 给html根元素设置动态写入样式
fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
docEl.firstElementChild.appendChild(fontEl);


/*-------------------------------------------------------*/
// 某一dpr下rem和px之间的转换函数
window.rem2px = function (v) {
  v = parseFloat(v);
  return v * rem;
};

window.px2rem = function (v) {
  v = parseFloat(v);
  return v / rem;
};

window.dpr = dpr;
window.rem = rem;