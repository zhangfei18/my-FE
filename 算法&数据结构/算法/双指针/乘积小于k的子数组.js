/**
 * 题目：输入一个由正整数组成的数组和一个正整数k，请问数组中有多少个数字乘积小于k的连续子数组？
 * 例如，输入数组[10，5，2，6]，k的值为100，有8个子数组的所有数字的乘积小于100，
 * 它们分别是[10]、[5]、[2]、[6]、[10，5]、[5，2]、[2，6]和[5，2，6]。
 */

function minProductArr(nums, k) {
  let left = 0
  let right = 0
  let product = 1
  let count = 0
  while (left <= right) {
    product *= nums[right]
    while (product >= k && left < right) {
      product /= nums[left++]
    }
    count += right - left + 1
    right++
  }
  return count
}
