

function combinationSum3(k, n) {
  let ret = []
  let path = []
  let sum = 0
  backtracking(1)
  return ret
  function backtracking(startIndex) {
    if (sum === n && path.length === k) {
      ret.push(path.slice(0))
      return
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i)
      sum += i
      backtracking(i + 1)
      path.pop()
      sum -= i
    }
  }
}

console.log(combinationSum3())
