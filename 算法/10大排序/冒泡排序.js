/*
* 1.依次比较相邻的两个数，如果第一个比第二个小，不变。
* 如果第一个比第二个大，调换顺序。一轮下来，最后一个是最大的数
* 2.对除了最后一个之外的数重复第一步，直到只剩一个数
* */

// 冒泡排序的时间复杂度为O(n2)，空间复杂度为O(1)，属于 稳定 排序。
// 适用于数据比较少或基本有序的情况。
let arr = [8, 6, 1, 4, 88, 9,0, 70]

function prop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log(prop(arr))