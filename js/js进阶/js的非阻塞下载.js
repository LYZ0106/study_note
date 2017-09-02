/*
* 非阻塞js的实现（non-blocking javascript）

js在浏览器中需要被下载、解释并执行这三步。在html body标签中的script都是阻塞的。也就是说，
顺序下载、解释、执行。尽管Chrome可以实现多线程并行下载外部资源，
例如：script file、image、frame等（css比较复杂，在IE中不阻塞下载，但Firefox阻塞下载）。但是，由于js是单线程的，所以尽管浏览器可以并发加快js的下载，但必须依次执行。所以chrome中image图片资源是可以并发下载的，但外部js文件并发下载没有多大意义。

要实现非阻塞js（non-blocking javascript）有两个方法：1. html5 2. 动态加载js


首先一种办法是HTML5的defer和async关键字：
defer
<script type="text/javascript" defer src="foo.js"></script>

async
<script type="text/javascript" async src="foo.js"></script>
 *
 * */


/*****************  第二种方法是动态加载js  *****************/
setTimeout(function () {
  var head = true; //加在头还是尾
  var script = document.createElement("script");
  script.src = "foo.js";

  if (head) {
    document.getElementsByTagName("head")[0].appendChild(script);
  } else {
    document.body.appendChild(script);
  }
}, 0)


//另外一个独立的动态加载js的函数
function loadJs(jsurl, head, callback) {
  var script = document.createElement('script');

  if (callback) {
    if (script.readyState) {  //IE
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null
          callback();
        }
      }
    } else {
      script.onload = function () {
        callback()
      }
    }
  }

  script.setAttribute("src", jsurl);

  if (head) {
    document.getElementsByTagName('head')[0].appendChild(script)
  } else {
    document.body.appendChild(script)
  }
}