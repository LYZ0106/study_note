var object = {
  b: {c: 4},
  d: [{e: 5}, {e: 6}]
};

console.log(object.b.c)

// map()方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
function parse(obj, str) {
  if (str === null || str.length === 0) return -1;
  let arr = str.replace('[', '.').replace(']', '').split('.')
  console.log(arr)
  arr.map(item => obj = obj[item.trim()]);  //这里迭代查找obj
  return obj || 'undefined';
}


console.log(parse(object, 'b.c'))    //true
console.log(parse(object, 'd[0].e') === 5) //true
console.log(parse(object, 'd.0.e') === 5)  //true
console.log(parse(object, 'd[1].e') === 6) //true
console.log(parse(object, 'd.1.e') === 6)  //true
console.log(parse(object, 'f') === 'undefined') //true