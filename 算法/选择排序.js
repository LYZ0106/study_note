/*
1.找出最小的数，和第一个交换位置
2.在剩下的数中，找出最二小的数，放在第二个
3.依次类推，排出顺序
* */

let arr = [8, 6, 1, 4, 88, 9, 70]

function select(arr) {
  let min
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (min !== i) [arr[min], arr[i]] = [arr[i], arr[min]]
  }
  return arr
}

console.log(select(arr))