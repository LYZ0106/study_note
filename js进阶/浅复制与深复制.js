/*
 * 这里是针对对象
 * 浅拷贝把自身属性链上的数据拷贝会目标内存地址，与被拷贝对象共享一套数据；
 * 深复制将原对象的各个属性逐个复制出去，并将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。
 *
 * 简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。
 */
/************************** 浅复制 ***********************************/
//方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
// 它将返回目标对象。拷贝的是属性值。
//Object.assign()

Array.prototype.slice()


/************************** 深复制 ***********************************/
  //在序列化对象时，所有函数和原型成员会被有意忽略
  //JSON.parse(JSON.stringify(a));


  //1,新开辟内存地址，2,递归复制。但无法解决内部循环引用的问题
const animal = {
    dog: { //对于非基本类型的变量，则递归至基本类型变量后，再复制
      bigDog: ['jack', 'jerry'],  // 按引用传递，共用地址
      smallDog: 'ben'
    },

    cat: 'tom', // 按值传递，不共用地址

    mouse: ['a', ['aa', 'bb'], 'c'],

    // 上层业务，更多的是完成业务功能，并不需要真正将函数深拷贝。
    tiger: function () {
      console.log('eat ... ')
    }
  };

function extent(obj, copy) {
  copy = copy || {};
  for (let i in obj) {
    if (typeof obj[i] === "object") { // 返回的object有可能是数组对象，对象
      copy[i] = (Object.prototype.toString.call(obj[i]) === '[object Array]') ? [] : {}
      extent(obj[i], copy[i])
    } else {
      copy[i] = obj[i]
    }
  }
  return copy
}

var ret = extent(animal)

ret.dog.bigDog = '改变'
ret.cat = '改变'
ret.mouse[1] = '改变'
ret.tiger = function () {
  console.log('改变')
}
console.dir(animal)
console.dir(ret)
