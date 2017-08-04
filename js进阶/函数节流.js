// 节流函数
function debounce(fun, delay) {
  let timer;
  return function (...args) { // 函数柯里化
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}

function fn() {
  window.addEventListener('resize', function () {
    console.log('a')
  })
}

debounce(fn, 250);

