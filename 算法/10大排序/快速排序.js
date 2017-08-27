// 稳定的定义：相同元素在排序前后的顺序不改变，为稳定的。否则不稳定
// 1 找基准（一般选取第一个），
// 2 把整个数组中小于它的元素放左侧，大于它的元素放右侧，
// 3 然后递归执行。
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let left = []
  let right = []
  let pivot = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i])
    if (arr[i] > pivot) right.push(arr[i])
  }

  return quickSort(left).concat(pivot, quickSort(right))
}

let arr = [4, 7, 2, 5, 6, 3, 8]
console.log(quickSort(arr))