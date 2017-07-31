/**
 * 使用hash值是时，key是string类型
 * 1、无法区分隐式类型转换成字符串后一样的值，比如1和'1'
 * 2、无法处理复杂数据类型，比如对象（因为对象作为key会变成[object Object]）
 * 3、特殊数据，比如'__proto__'会挂掉，因为tmp对象的__proto__属性无法被重写
 */

const arr = [1, 4, 7, 4, "4", {a: 1, b: 2}, {a: {aa: 11, ab: 12}, b: 2}, {a: 1, b: 2}]

// var arr = [2,3,4,[2,3,[2,3,4,2],5],3,5,[2,3,[2,3,4,2],2],4,3,6,2];
function unique(arr) {
  let hash = {}
  let result = []
  let tmpKey
  for (let i = 0; i < arr.length; i++) {
    // 1.这里把某个数arr[i]作为键值，利用key的唯一性，但是key是string类型，需要typeof类型区分
    // 2.将对象序列化之后作为key来使用。
    tmpKey = typeof arr[i] + JSON.stringify(arr[i])

    if (!hash[tmpKey]) {
      hash[tmpKey] = 1
      result.push(arr[i])
    }
  }
  return result
}

console.log(unique(arr))

// es6
// Array.from(new Set(arr))


/*********************** 三维数组或 n 维数组去重 *************************/
let arr1 = [2, 3, 4,
  [2, 3, [2, 3, 4, 2], 5],
  3, 5,
  [2, 3, [2, 3, 4, 2], 2],
  4, 3, 6, 2];

function unique1(arr) {
  let result = [];
  arr.forEach(function (item) {  // item 相当于 arguments[0]
    if (Array.isArray(item)) {
      unique(item)
    } else if (result.indexOf(item) < 0) {
      result.push(item)
    }
  });
  return result
}

console.log(unique1(arr1));
