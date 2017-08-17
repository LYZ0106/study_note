/* null是一个字面量，是JavaScript原始值 之一，（不是全局对象的一个属性，而undefined 是）
 * 表示空值（null or an "empty" value），即没有对象被呈现
 * 在 APIs 中，null 常被放在期望一个对象，但是不引用任何对象的参数位置。=> 占位

null适用于DOM，它是独立于语言的，不属于ECMAScript规范的范围。因为它是一个外部API，
试图获取一个不存在的元素返回一个null值，而不是undefined。 作用：
   1、如果你需要给一个变量或属性指定一个不变值，将它传递给一个函数，或者从一个函数返回null，
null几乎总是最好的选择。JavaScript使用undefined并且程序员应该使用null。
   2、一个显式指定变量为无效(object= null)当一个引用不再是必需的。
通过分配null值，有效地清除引用，并假设对象没有引用其他代码，指定垃圾收集，确保回收内存。
*/

//foo不存在，它从来没有被定义过或者是初始化过：
foo   //=>"ReferenceError: foo is not defined"

// foo现在已经是知存在的，但是它没有类型或者是值：
var foo = null;
foo   //=>"null"


/*-----------------------------------------------------------------*/
//null 与 undefined 的不同点：      == 会类型转换
console.log(typeof null)          // typeof不能检测null或undefined和引用类型数据
console.log(Object.prototype.toString.call(null))
console.log(typeof undefined)     // undefined
console.log(null === undefined)   // false
console.log(null == undefined)    // true
console.log(null === null)        // true
console.log(null == null)         // true
console.log(!null)                //true
isNaN(1 + null)                   // false
isNaN(1 + undefined)              // true
console.log('------------------------------------------------------')

/*-----------------------------------------------------------------*/
// Object.create() 用 指定的原型对象及其属性去创建一个新的对象。
var obj = Object.create(null); //null 是最顶端
console.log(Object.prototype.toString.call(obj))  // object
//console.log(obj+'');
//console.log(String(obj));     // 报错的原因是不允许引用任何对象的参数
//console.log(Number(obj));
console.log(null + '');
console.log(undefined + '');

var test = null
console.log(test + '');

console.log(obj.__proto__ === Object.prototype);

console.log('-----------------------')
obj='roro'
console.log(Object.prototype.toString.call(obj))  // object
console.log(obj+'');       // todo
console.log(String(obj));  // todo
console.log(Number(obj));  // todo
