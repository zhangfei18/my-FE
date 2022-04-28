/**
 * 该题目和刷过的另外一个组合题目最大的区别就是，
 * 该题的集合里面有重复的元素, 而最后的组合结果里面
 * 却不能包含重复的组合
 */


let combinationSum2 = function (candidates, target) {
  let ret = []
  let path = []
  let sum = 0
  let used = []
  // 树层去重复一定要排序
  candidates.sort()
  backtracking(0)
  return ret
  function backtracking(startIndex) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      ret.push(path.slice(0))
    }
    for (let i = startIndex; i < candidates.length; i++) {
      let cur = candidates[i]
      // 树层去重 + 剪枝操作: cur > target - sum
      if ((i > 0 && cur === candidates[i - 1] && !used[i - 1]) || cur > target - sum) {
        continue
      }
      path.push(cur)
      used[i] = true
      sum += cur
      backtracking(i + 1)
      path.pop()
      used[i] = false
      sum -= cur
    }
  }
}