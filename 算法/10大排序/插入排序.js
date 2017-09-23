/*
* 插入排序（Insertion Sort）---(In-place)
*（1） 从第一个元素开始，该元素可以认为已经被排序
*（2） 取出下一个元素，在已经排序的元素序列中从后向前扫描
*（3） 如果该元素（已排序）大于新元素，将该元素移到下一位置
*（4） 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
*（5） 将新元素插入到下一位置中
*（6） 重复步骤2
* */
// In-place: 占用常数内存，不占用额外内存
// Out-place: 占用额外内存

//插入排序时间复杂度为O(n2)，空间复杂度为O(1)，属于 稳定 排序。算法适用于少量数据的排序。
var arr = [3, 6, 4, 1, 99, 44, 22, 5];

function insertSort(arr) {
  let preIndex
  let currentVal

  for (let i = 1; i < arr.length; i++) {
    preIndex = i - 1;
    currentVal = arr[i];
    while (preIndex >= 0 && arr[preIndex] > currentVal) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--
    }
    arr[preIndex + 1] = currentVal;     // 将当前值放置合适的位置
  }
  return arr
}

console.log(insertSort(arr));