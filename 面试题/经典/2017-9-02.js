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



/*-----------------------------------------------------------------*/
// 打印的顺序
var input = document.querySelector('input');
input.onmousedown = () => console.log('mousedown')
input.onmouseup = () => console.log('onmouseup')
input.onclick = () => console.log('moclick')
input.onfocus = () => console.log('onfocus')
// mousedown， onfocus， onmouseup， moclick


/*------------------------------------------------------------------------*/

// 生成指定长度的字符串
function randomString(n) {
  var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var tmp = '';
  for (var i = 0; i < n; i++) {
    tmp += str.charAt(Math.round(Math.random() * str.length));
  }
  return tmp;
}


/*---------------------------------------------------------------------*/
// 当通过 [] 访问对象属性时, 方括号中的表达式将会被求值并被转换成一个字符串,
// 调用它的toString方法.
var a = {};
b = {key: 'b'};
console.log(b.toString()); // [object Object]
c = {key: 'c'};

console.log(typeof Object.keys(a)[0]);    // string, 属性名 b 转换成了字符串.
// 所以 b 和 c 均转换成相同的字符串 [object Object]. 所以再次赋值就会被覆盖.
a[b] = 123;
a[c] = 456;

// 即为
a['[object Object]'] = 123;
// 同理，下面一步赋值操作 c 也会先转换，然后再次更新属性 '[object Object]'对应的值
a['[object Object]'] = 456;

console.log(a[b]);
console.log(a[c]);

//--------- es6
var a = new Map(),
  b = {key: 'b'},
  c = {key: 'c'};
a.set(b, 123);
a.set(c, 456);
console.log(a.get(b)); // 123

