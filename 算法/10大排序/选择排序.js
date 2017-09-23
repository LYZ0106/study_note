/*
1.找出最小的数，和第一个交换位置
2.在剩下的数中，找出最小的数，放在第二个
3.依次类推，排出顺序
* */

// 选择排序的时间复杂度为O(n2)，空间复杂度为O(1)，属于 不稳定 排序。
// 适用于数据比较少的情况，综合各种情况来讲还是这个最慢。

// 交换后，两个6的相对前后顺序就被破坏，所以不稳定
let arr = [8, 6, 1, 6, 4, 88, 9, 70]


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