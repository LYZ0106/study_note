class Cash {
  constructor(arg) {
    this.yuan = Math.floor(arg / 100)
    this.jiao = Math.floor((arg - this.yuan * 100) / 10)
    this.fen = arg % 10
    this.arg = arg
  }

  add(cashB) {
    return new Cash(this.valueOf() + cashB.valueOf())
  }

  // 默认继承的方法
  valueOf() {
    return this.arg
  }

  toString() {
    return `${this.yuan}元${this.jiao}角${this.fen}分`
  }

  // 静态方法调用直接在类上进行，但在类的实例上不可被调用。
  // 静态方法通常用于为一个应用程序创建工具函数。
  static add(cash1, cash2) {
    return new Cash(cash1.valueOf() + cash2.valueOf())
  }
}

const cash1 = new Cash(105)
const cash2 = new Cash(66)
const cash3 = cash1.add(cash2)
const cash4 = Cash.add(cash1, cash2)
const cash5 = new Cash(cash1 + cash2)

console.log('-------1------ ' + cash1)
console.log('-------2------ ' + cash2)
console.log('-------3------ ' + `${cash3}`)
console.log('-------4------ ' + `${cash4}`)
console.log('-------5------ ' + `${cash5}`)