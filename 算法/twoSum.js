/*
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
**/

/*
function twoSum(nums, target) {
  var i = 0, index, result = []

  function findIndex(oldArr) {
    return nums.findIndex((item) => {
      return item === (target - oldArr)
    })
  }

  for (; i < nums.length; i++) {
    index = findIndex(nums[i])
    if (index !== -1 && index !== i) {
      console.log("副本的索引" + index)
      result[0] = index
      console.log("原数组的索引" + i)
      result[1] = i
      return result
    }
  }
}
*/

const nums = [3, 2, 4], target = 6;

// 空间换时间
function twoSum(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let index = hash[target - num];  // hash['4']  hash['2']

    if (typeof index !== 'undefined') {//利用key的唯一性
      return [index, i]
    } else {
      // 没有key值时，这里做了两件事：
      // 1、将num作为key
      // 2、我要的结果就是某值在原数组的索引 将i（索引）保存为hsah表中key对应的值
      hash[num] = i  // hash['2']=1
    }
  }
}

var ret = twoSum(nums, target)
console.log(ret)
