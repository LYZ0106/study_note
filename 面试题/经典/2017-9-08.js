var obj = {
  a: 'aaa',
  geta: function () {

    //  let self=this
    function change() {
      // js 设计的缺陷，应该把this存起来
      return '123' + this.a  // undefined
    }

    console.log(window.change()) //
    return this.a
  }
}

console.log(obj.geta())


/*--------------------------------------------------------------------*/
console.log(Document.location === Window.location) //true


/*--------------------------------------------------------------------*/
function exce(num) {
  switch (num) {
    case'A':
      console.log('Case A');
      break;
    case'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('ERROR');
  }
}

// new String('A')返回 [String: 'A']
exce(new String('A')) // ERROR
exce("A") // Case A
// 利用 valueOf 方法，我们可以将字符串对象转换为其对应的基本字符串。
var a = new String('A').valueOf()


/*---------------------------------------------------------------------*/
function* range(m, n) {
  for (let i = m; i < n; i++) {
    yield i;
  }
}

console.log(...range(1, 10)) // 1 2 3 4 5 6 7 8 9


/*---------------------------------------------------------------*/
// 下面三种的完全一样的：
var obj1 = {};
var obj2 = new Object();
var obj3 = Object.create(Object.prototype);


var obj = {x: 1}
var Person = function () {
}

Person.prototype = Object.create(obj)  //对象obj继承了属性x
var person = new Person()
// 用于测试一个对象是否存在于另一个对象的原型链上。
console.log(obj.isPrototypeOf(Person)) // false todo
console.log(obj.isPrototypeOf(person)) // true todo

/*-------------------------------------------------------------------*/
function isOdd(num) {
  return num % 2 === 1
}

function isEven(num) {
  return num % 2 === 0
}

function isSane(num) {
  return isEven(num) || isOdd(num)
}

var values = [7, 4, '13', -9, Infinity];
console.log(values.map(isSane)) // true, true, true, false, false

