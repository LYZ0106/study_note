/*
* Proxy 对象用于定义基本操作的自定义行为 (例如, 属性查找，赋值，枚举，函数调用,等)。
* */
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    obj[prop] = value;  // The default behavior to store the value
  }
};

let person = new Proxy({}, validator);
person.age = 100;
console.log(person.age); // 100


// 抛出异常: Uncaught TypeError: The age is not an integer
person.age = 'young';

// 抛出异常: Uncaught RangeError: The age seems invalid
person.age = 300;
