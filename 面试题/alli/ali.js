//有一批并发的异步方法，如果在限定的时间内全部执行完，则输出它们的执行结果，否则输出 'timeout'。参考下面的代码，请在 runTasks 中实现上述功能（不依赖第三方库）：

/* callback(error, result) */
function asyncFuncA(param1, param2, callback) { /* async code */
}

function asyncFuncB(callback) { /* async code */
}

function asyncFuncC(param1, callback) { /* async code */
}


let wo = runTasks({
  duration: 1000, //限定时间
  tasks: [
    [asyncFuncA, 'foo', 'bar'],
    asyncFuncB,
    [asyncFuncC, 'baz']
  ],
  done: function (resultA, resultB, resultC) {
    console.log(resultA, resultB, resultC);
  },
  fail: function (err) {
    console.error(err);
  },
  timeout: function () {
    console.log('timeout');
  }
});

function runTasks(options) {
  let duration = options.duration || ''
  let fail = options.fail || ''
  let timeout = options.timeout || ''
  let tasks = options.tasks || []
  let done = options.done || ''

  let timeStart
  let timeEnd

  let fnName
  let args
  timeStart = new Date().getTime()
  tasks.forEach(function (item) {
    fnName = item[0]
    if (item.length === 1) {
      fnName = item
      args = null
    }
    if (item.length > 1) args = item.slice(1)
    // console.log(args)

    console.log('----------------------------------------------------' +
      '---------------------------------------------------------------')
    setTimeout(function () { // 模拟函数的执行
    }, 1000)

    //fnName + '(' + args + ')'
    timeEnd = new Date().getTime()
  })
  console.log(timeEnd - timeStart)

  done = done()

  if (fail) {
    fail = function (cd) {
      cd()
    }
  }

  if (timeStart - timeEnd > duration) { // 超时
    timeout = timeout()
  }
}
