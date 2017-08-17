/*
* lazyMan是典型的流程控制问题，
* 问题：实现任务的顺序执行。
* 类似Express的中间件，每个中间件执行完后调用next()函数，next函数调用下一个中间件。
*
*
* unshift方法可向数组的开头添加一个或更多元素，并返回新的长度。
* shift删除数组的第一个元素,并返回删除的元素
* pop删除数组的最后一个元素,并返回删除的元素
*
*
* 主要思路：设计一个事件队列，来控制事件的流程
* */

class LazyMan {
  constructor(name) {
    this.name = name
    this.task = []
    this._showName()
  }

  // 核心：将队列中的事件取出来执行 ，有点像订阅发布模式
  next() {
    let fn = this.task.shift()
    fn && fn()
  }

  _showName() {
    let fn = () => {
      console.log(this.name)
      this.next() // 执行队列的下一个任务
    }
    this.task.push(fn)
    setTimeout(() => this.next(), 0) // 注意！！！ 放入任务队列中等待执行
  }

  eat(food) {
    let fn = () => {
      console.log('eat: ' + food)
      this.next()
    }
    this.task.push(fn)
    return this // 实现链式调用
  }

  sleep(time) {
    let fn = () => {
      setTimeout(() => {
        console.log("Wake up ! you had sleeped " + time + 's')
        this.next()
      }, time * 1000)
    }

    this.task.push(fn)
    return this
  }

  firstSleep(time) {
    let fn = () => {
      setTimeout(() => {
        console.log("first: you sleep " + time + 's')
        this.next()
      }, time * 1000)
    }

    this.task.unshift(fn)
    return this
  }
}

function lazyMan(name) {
  return new LazyMan(name)
}

lazyMan('roro').firstSleep(4).sleep(3).eat('zhuzhu')

