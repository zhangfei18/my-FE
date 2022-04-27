

function combinationSum(nums, target) {
  let ret = []
  let path = []
  let sum = 0
  nums.sort()
  backtracking(nums, target, 0)
  function backtracking(nums, target, startIndex) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      ret.push(path.slice(0))
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.join(nums[i])
      sum += nums[i]
      backtracking(nums, target, i)// 注意i并没有+1, 是为了可以重复选取
      sum -= nums[i]
      path.pop()
    }
  }
  return ret
}

console.log(combinationSum([2, 3, 5], 8))