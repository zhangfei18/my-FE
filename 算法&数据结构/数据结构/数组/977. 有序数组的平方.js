

// 因为是一个递增的序列-优先考虑双指针
var sortedSquares = function (nums) {
  let left = 0
  let right = nums.length - 1
  let k = right
  let ret = []
  while (left <= right) {
    let r = nums[right] * nums[right]
    let l = nums[left] * nums[left]
    if (r > l) {
      ret[k] = r
      right--
    } else{
      ret[k] = l
      left++
    }
    k--
  }
  return ret
};

console.log(...sortedSquares([-7,-3,2,3,11]))
console.log(...sortedSquares([-4,-1,0,3,10]))

// 是否有原地的解法？
