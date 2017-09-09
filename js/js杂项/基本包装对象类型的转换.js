// 对象(数组)是引用类型，只能与自己相等
let a = ['v', 4, 'll']
let b = ['v', 4, 'll']
let c = {a: 2, "7": 'a'}
let d = {a: 2, "7": 'a'}
console.log(a == a) //true
// 对象比较的是引用，就像它门一模一样也不相等，只有自己与自己相等
console.log(a == b) //false
console.log(a === b) //false



/*-----------------------------------------------------------------------*/
//多个数字和数字字符串混合运算时，跟操作数的位置有关
console.log(2 + 1 + '3'); //‘33’
console.log('3' + 2 + 1); //'321'

//数字字符串之前存在数字中的正负号(+/-)时，会被转换成数字
console.log(typeof '3');   // string
console.log(typeof +'3');  //number

//同样，可以在数字前添加 ''，将数字转为字符串
console.log(typeof 3);   // number
console.log(typeof ('' + 3));  //string

//对于运算结果不能转换成数字的，将返回 NaN
console.log('a' * 'sd');   //NaN
console.log('A' - 'B');  // NaN

// 对于 == ,如果其中一个值是true，则将其转换为1再进行比较。
// 如果其中的一个值是false，则将其转换为0再进行比较。
console.log(false == '0')   // true   false--> 0
console.log(false === '0')  // false


/*------  要注意空数组([])和空对象({}): ------*/

/*
  ==转换不同数据类型遵循的规则
   如果是Boolean，true转换为1，false转化为0；
   如果是String，转换为数值（使用Number()）；
   如果是Object，先调用valueOf()，再调用toString()；
   undefined == null；
   NaN与任何数不等；
* */

//   === 直接判断，不作任何转换， == 隐式转换

// 空数组转换为数字0
// 数组继承了默认的valueOf()方法，这个方法返回一个对象而不是一个原始值，
// 因此，到数字的转换调用toString()方法。
// 空数组转换为空字符串，空字符串转换为数字0.
console.log([] == false) //true


// 1、{}.valueOf()返回原始值{}，非数字   2、 .toString() --> [object Object]
console.log({} == false) //false todo

// 条件操作符(三元运算符)，条件判断时使用Boolean的隐式转换，即调用Boolean();
console.log([] === false) //false
console.log({} === false) //false
console.log(Boolean([])) //true
console.log(Boolean({})) //true


console.log(typeof +false);  //number


// 等号运算符（== 和 ===） 不能被用来判断一个值是否是 NaN。
// 必须使用 Number.isNaN() 或 isNaN() 函数。
// 在执行自比较之中：NaN，也只有NaN，比较之中不等于它自己。
console.log(NaN === NaN) //false
console.log(NaN == NaN)  //false

console.log(null == undefined ) // true
console.log(null === undefined ) // false


