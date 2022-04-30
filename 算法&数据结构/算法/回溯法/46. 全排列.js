/**
 * 排列问题和子集以及组合问题的不同：
 *  1. 每层都是从头开始搜索， 而不是用startIndex标记搜索的起点了
 *  2. 需要使用used数组来记录哪些元素已经被使用过了
 * 本题做完总结技巧：
 *  如果是树层去重就是 used[i - 1] === false 跳过
 *  如果是树枝去重就是 used[i - 1] === true 跳过
 *  可以自己体会一波~(需要连续看完组合去重+子集去重+本题才能体会我感觉)
 */

function permute(nums) {
  let ret = []
  let path = []
  let used = []
  nums.sort()
  backtracking()
  return ret
  function backtracking() {
    if (path.length === nums.length) {
      ret.push(path.slice(0))
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }
      let cur = nums[i]
      path.push(cur)
      used[i] = true
      backtracking()
      path.pop()
      used[i] = false
    }
  }
}