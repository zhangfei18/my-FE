/**
 * 双指针-滑动窗口
 * */
function minSubArrayLen_2(target, nums) {
  let len = nums.length
  let ret = Infinity
  let left = 0
  let right = 0
  let sum = 0
  while (right < len) {
    sum += nums[right++]
    // 此处容易写成if
    while (sum >= target) {
      let subLen = right - left
      ret = ret < subLen ? ret : subLen
      sum -= nums[left++]
    }
  }
  return ret > len ? 0 : ret
}
console.log(minSubArrayLen_2(7, [2, 3, 1, 2, 4, 3]))