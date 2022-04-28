/**
 * 子集问题是收集多叉树的所有节点
 * 组合问题/分割问题其实是只会收集多叉树的叶子节点
 */

function subsets(nums) {
  let ret = []
  let path = []
  backtracking(0)
  return ret
  function backtracking(startIndex) {
    ret.push(path.slice(0))
    if (startIndex === nums.length) {
      return
    }
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      backtracking(i + 1)
      path.pop()
    }
  }
}