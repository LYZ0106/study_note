/*
1.不断将数组对半分，直到每个数组只有一个
2.将分出来的部分重新合并
3.合并的时候按顺序排列

只不过快排的复杂度花在了成树（二叉搜索树）上（从上往下)，
而归并排序的复杂度花在了归并上（从下往上）。
*/

/*
function mergeSort(a) { // 迭代版本
  if (a.length === 1) return a;

  let work = [];
  for (let i = 0, len = a.length; i < len; i++) {
    work.push([a[i]]);
  }

  work.push([]); // 如果数组长度为奇数 todo

  for (let lim = len; lim > 1; lim = (lim + 1) / 2) {
    for (let j = 0, k = 0; k < lim; j++, k += 2) {
      work[j] = merge(work[k], work[k + 1]);
    }
    work[j] = []; // 如果数组长度为奇数 todo
  }

  return work[0];
}
*/

let arr = [8, 6, 1, 4, 88, 9, 70]

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  return result.concat(left, right)
}

function mergeSort(arr) { // 递归版本
  if (arr.length < 2) return arr

  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}


console.log(mergeSort(arr))