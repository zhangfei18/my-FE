

function letterCombinations(digits) {
  let ret = []
  let path = []
  if (!digits.length) return ret
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  backtracking(digits, digits.length, 0)
  function backtracking(digits, len, start) {
    if (path.length === len) {
      ret.push(path.join(''))
      return
    }
    let n = Number(digits[start])
    let str = map[n]
    // console.log(map[s])
    for (let i = 0; i < str.length; i++) {
      path.push(str[i])
      // 因为组合问题不需要去重, 所以给下一轮传递的并不是i/ i+1, 而是start+1
      backtracking(digits, len, start + 1)
      path.pop()
    }
  }
  return ret
}
console.log(letterCombinations('23'))
console.log(letterCombinations(''))