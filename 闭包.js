// 闭包
var name

function makeFunc() {
  name = "Mozilla";

  function displayName() {
    console.log(name + "gghhhjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  }

  return displayName;
}

// 执行后makeFunc(), name立即销毁
makeFunc();

// myFunc 变成一个闭包，由 displayName 函数和闭包创建时存在的 “Mozilla” 字符串形成。
// displayName()被赋予在一个全局变量myFunc下
var myFunc = makeFunc()
myFunc()



/*******************************************************************/
//闭包作用
// 在面对象编程中，对象允许我们将某些数据（对象的属性）与一个或者多个方法相关联。

var makeCounter = function () {

  // 环境中包含两个私有项：名为 privateCounter 的变量和名为 changeBy 的函数。
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value());

Counter1.increment();
Counter1.increment();
console.log(Counter1.value());

Counter1.decrement();
console.log(Counter1.value());

console.log(Counter2.value());


/****************************************************************/
//性能考量
//如果没有特殊需要，在其它函数中创建函数是不明智的，因为闭包对脚本性能具有负面影响，包括处理速度和内存消耗。
//例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。
// 原因是这将导致每次构造器被调用，方法都会被重新赋值一次（也就是说，为每一个对象的创建）

//考虑以下虽然不切实际但却说明问题的示例：
function MyObject(name, message) {
  this.name = name;
  this.message = message;
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}

/**********************************/
//上面的代码并未利用到闭包的益处，因此，应该修改为如下常规形式：
function MyObject(name, message) {
  this.name = name;
  this.message = message;
}

//继承的原型可以为所有对象共享，且不必在每一次创建对象时定义方法。
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};

