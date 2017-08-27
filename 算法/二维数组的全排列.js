/*二维数组的全排列组合。
如输入[[1,2],[3,4],[5,6]]
输出：
  [ 1, 3, 5 ]
  [ 1, 3, 6 ]
  [ 1, 4, 5 ]
  [ 1, 4, 6 ]
  [ 2, 3, 5 ]
  [ 2, 3, 6 ]
  [ 2, 4, 5 ]
  [ 2, 4, 6 ]
  */

const arr = [[1, 2], [3, 4], [5, 6]]
// 递归
function printArr(arr,n,res){
  for(var i = 0; i<arr[i].length;i++){
    if(n === 0){
      res = []
    }
    if(n<arr.length){
      var _res = res.slice() // 结果的副本
      _res.push(arr[n][i])
      if(n === arr.length-1){
        console.log(_res)
      }else{
        printArr(arr,n+1,_res)
      }
    }
  }
}

printArr(arr,0)
//let ret = cartesian(arr)


const a = [1, 2]  // A数组
const b = [3, 4]  // B数组
const c = [5, 6]
const d = [7, 8]
// 迭代
function cartesian(arr) {
  return arr
    .map(list => list                    // 取到第一个数组
      .map(item => [item]))              // 分出第一组数组的 '1' 与 '2'
    .reduce((listsA, listsB) => listsA         // 一堆数组中中取 A 数组
      .reduce((list, listA) => list            // A 数组中取一个 '1'
        .concat(listsB                         // 连接 B 数组
          .map(listB => listA                  // B 数组中取一个 '3'
            .concat(listB))                    // '1' 与 '3' 连接
        ), [])
    )
}

let ret = cartesian(a, b, c, d)

console.log(ret)
