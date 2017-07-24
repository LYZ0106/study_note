/*
 * 这里是针对对象
 * 浅拷贝把自身属性链上的数据拷贝会目标内存地址，与被拷贝对象共享一套数据；
 * 深复制将原对象的各个属性逐个复制出去，并将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。
 *
 * 简单来说，浅复制只复制一层对象的属性，而深复制则递归复制了所有层级。
 */

//


//Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
//Object.assign() 拷贝的是属性值。

var a = [1, 2, 3, 4]
a['3'] = "26jo6jon"
console.log(a[2])
a.set('ercf4t', 9)
console.log(a[2])

var b = {}
Object.assign(b, a)
console.log("___________ 修改前 _____________")
console.log(a)
console.log(b)
//
console.log(b['3'])


console.log("___________ 修改后 _____________")
console.log(a)
console.log(b)

//TODO 一层深拷贝，两层以上引用
g.b= 9999             // 拷贝属性值
g.d.e = 32            // 源对象的属性值是一个指向对象的引用,只拷贝那个引用值。



//深复制理解两点，1,新开辟内存地址，2,递归来刨根复制。
//JSON.parse(JSON.stringify(a));




