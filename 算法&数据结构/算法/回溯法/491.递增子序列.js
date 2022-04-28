/**
 * 难点：
 *  本题其实也可以理解成求集合的子集， 但是和第90.子集2 不同
 *  的是本题不能提前将集合排好序用来后面的每层去重操作
 * 解决办法：
 *  还是借助一个used数组, used数组用来记录每层都用过了哪些数字
 */

var findSubsequences = function (nums) {
  let ret = []
  let path = []

  backtracking(0)
  return ret
  function backtracking(startIndex) {
    if (path.length > 1) {
      ret.push(path.slice(0))
    }
    let used = []
    for (let i = startIndex; i < nums.length; i++) {
      let cur = nums[i]
      // 去重 + (剪枝:cur < path[path.length - 1])
      if ((path.length > 0 && cur < path[path.length - 1]) || used.indexOf(cur) !== -1) {
        continue
      }
      used.push(cur)
      path.push(cur)
      backtracking(i + 1)
      path.pop()
    }
  }
};