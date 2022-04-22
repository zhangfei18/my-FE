/**
 * 题目：输入一个正整数组成的数组和一个正整数k，
 * 请问数组中和大于或等于k的连续子数组的最短长度是多少？
 * 如果不存在所有数字之和大于或等于k的子数组，则返回0。
 * 例如，输入数组[5，1，4，3]，k的值为7，和大于或等于7的最短连续子数组是[4，3]，
 * 因此输出它的长度2。
 */

function minSubArrayLen(k, nums) {
  let minLen = +Infinity
  let left = 0
  let right = 0
  let sum = 0
  while (right <= nums.length) {
    sum += nums[right]
    while (sum >= k && left <= right) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left++]
    }
    right++
  }
  return minLen
}

console.log(minSubArrayLen(7, [5, 1, 4, 3]))