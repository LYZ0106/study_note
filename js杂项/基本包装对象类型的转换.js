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

console.log(false == '0')   // true
console.log(false === '0')  // false


// 要注意空数组([])和空对象({}):
console.log([] == false) //true
console.log({} == false) //false
console.log(Boolean([])) //true
console.log(Boolean({})) //true