
/**
 * 暴力解法
 */
var minSubArrayLen = function (target, nums) {
  let len = nums.length
  let ret = Infinity
  for (let i = 0; i < len; i++) {
    let sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum >= target) {
        let curLen = j - i + 1
        ret = ret > curLen ? curLen : ret
        break
      }
    }
  }
  return ret > len ? 0 : ret
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))

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
