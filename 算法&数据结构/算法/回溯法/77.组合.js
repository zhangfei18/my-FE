
/**
 * 组合问题注意事项： 不可重复 比如 12 和 21 就算是重复的了
 */
function combine(n, k) {
  let ret = []
  let path = []
  function backtracking(n, k, startIndex) {
    if (path.length === k) {
      ret.push(path.slice(0))
      return;
    }
    // 剪枝优化写法: for(let i = startIndex; i <= n - (k - path.length); i++) + 1
    for (let i = startIndex; i <= n; i++) {
      path.push(i)
      backtracking(n, k, i + 1)// 向下传递i+1, 避免重复选取
      path.pop()
    }
  }
  backtracking(n, k, 1)
  return ret
}
console.dir(combine(4, 2))
console.log(combine(1, 1))
