

var subsetsWithDup = function (nums) {
  let ret = []
  let path = []
  let used = []
  // 树层去重一定要排好序
  nums.sort()
  backtracking(0)
  return ret
  function backtracking(startIndex) {
    ret.push(path.slice(0))
    for (let i = startIndex; i < nums.length; i++) {
      let cur = nums[i]
      if (cur === nums[i - 1] && !used[i - 1]) {
        continue
      }
      path.push(cur)
      used[i] = true
      backtracking(i + 1)
      path.pop()
      used[i] = false
    }
  }
};