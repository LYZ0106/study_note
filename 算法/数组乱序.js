// 数组随机排序，又称洗牌功能
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffle(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let rand = parseInt(Math.random() * len);
    let temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(shuffle(arr));

// 第二种 改变原数组
function randSort1(arr) {
  let result = []
  while (arr.length > 0) {
    let randomIndex = parseInt(Math.random() * arr.length)
    result.push(arr[randomIndex])
    arr.splice(randomIndex, 1)
  }
  return result
}

// 第三种 最高效!!! 但是不随机
// v8引擎源码：出于性能，短数组（长度小于10）是插入排序，长数组使用快速排序
arr.sort(() => Math.random() - 0.5)
console.log(arr);

// Fisher–Yates 洗牌算法 最佳
function FY_shuffle(arr) {
  let len = arr.length
  while (len) {
    let j = Math.floor(Math.random() * len--);
    [arr[j], arr[len]] = [arr[len], arr[j]]
  }
  return arr
}

console.log(FY_shuffle(arr));
