
/**
 * 暴力解法：O(n2)
 */
function subarraySum(nums, k) {
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
    sum = 0
  }
  return count
}


// console.log(subarraySum([1, 1, 1], 2))

/**
 * 前缀和O(n2)
 * */

function subarraySum(nums, k) {
  let next = [0]
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    next[i + 1] = next[i] + nums[i]
  }
  // console.log(next)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (next[j + 1] - next[i] === k) {
        count++
      }
    }
  }
  return count
}
// console.log(subarraySum([1, 1, 1], 2))

/**
 * 前缀表——hash辅助
 */

var subarraySum = function (nums, k) {
  let count = 0
  const mp = new Map();
  mp.set(0, 1);
  let pre = 0
  for (let num of nums) {
    pre += num
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count;
}
// [0,1,3,6,7, 9]
console.log(subarraySum([1, 2, 3], 3))