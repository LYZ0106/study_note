/*
 * 这里是针对对象
 * 浅拷贝把自身属性链上的数据拷贝会目标内存地址，与被拷贝对象共享一套数据；
 * 深复制将原对象的各个属性逐个复制出去，并将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。
 *
 * 简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。
 */
/************************** 浅复制 ***********************************/
//方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
// 它将返回目标对象。拷贝的是 属性值。 原始值会被隐式转换成其包装对象
//Object.assign()

Array.prototype.slice()


/************************** 深复制 ***********************************/
  //在序列化对象时，所有函数和原型成员会被有意忽略
  //JSON.parse(JSON.stringify(a));


  //1,新开辟内存地址，2,递归复制。但无法解决内部循环引用的问题
const animal = {
    dog: {bigDog: ['jack', 'jerry'], smallDog: 'ben'},
    cat: 'tom',
    mouse: ['a', ['aa', 'bb'], 'c'],
    // 上层业务，更多的是完成业务功能，并不需要真正将函数深拷贝。
    tiger: () => console.log('eat ... ')
  };

function extent(obj) {
  let copy = {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i) && typeof obj[i] === "object") { // 返回：1、数组对象 2、对象
      copy[i] = (Object.prototype.toString.call(obj[i]) === '[object Array]') ? [] : {}
      copy[i] = extent(obj[i]) // 将其递归至基本类型的变量，再复制
    } else {
      copy[i] = obj[i]
    }
  }
  return copy
}

let ret = extent(animal)

ret.dog.bigDog = '改变'
ret.cat = '改变'
ret.mouse[1] = '改变'
ret.tiger = () => console.log('改变')

console.dir(animal)
console.dir(ret)

/*-----------------------------------------------------------*/
function clone(obj) {
  let copy;

  if (null === obj || typeof obj !== "object") return obj;

  // Handle Date todo
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // 先判断是否为多层的数组对象，必须在object的前面
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}
