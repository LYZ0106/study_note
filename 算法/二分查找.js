/*
* 二分搜索：在有序数组中查找某一特定元素
* 从数组中间元素开始，如果中间元素是要查找的元素，则搜索过程结束；
* 如果需查找的元素大于或小于中间元素，在数组大于或小于中间元素的那一半中查找，跟开始一样从中间元素开始比较。
* 如果在某一步骤数组为空，则代表找不到。
* */
// 递归

function binarySearch1(arr, target, start, end) {
  start = start || 0;
  end = end || arr.length - 1
  let mid = parseInt(start + (end - start) / 2)

  if (target === arr[mid]) {
    return mid
  } else if (target < arr[mid]) {
    return binarySearch1(arr, target, start, mid-1)
  }else if( target > arr[mid]){
    return binarySearch1(arr, target, mid+1, end)
  }
  return -1
}

// 迭代
function binarySearch(arr, target) {
  let start = 0
  let end = arr.length - 1
  // 查找元素所处的位置，假如一开始就在中间
  let mid = parseInt(start + (end - start) / 2)
  while (start <= end) {
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      end = mid - 1
    } else if (target > arr[mid]) {
      start = mid + 1
    }
  }
  return -1
}

let arr = [2, 3, 4, 5, 6, 7, 8]
console.log(binarySearch(arr, 5))
