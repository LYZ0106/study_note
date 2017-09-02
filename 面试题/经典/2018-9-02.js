function effect(ary) {
  ary[0] = ary[2]
}

function bar(x, y, z) {
  z = 10
  effect(arguments)
  return x + y + z
}

console.log(bar(1, 1, 1))

/*--------------------------------------------------------------*/
var i = 1;
(function () {
  var start = new Date().getTime();
  var si = setInterval(function () {
    var now = new Date().getTime();
    console.log(now)
    if (now < (start + 100)) {
      i++
    } else {
      console.log(i);
      clearInterval(si);
    }
  }, 10)
})()   //  todo 打印 8，9，10
