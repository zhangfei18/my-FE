

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
    let s = Number(digits[start])
    console.log(map[s])
    for (let i = 0; i < map[s].length; i++) {
      path.push(map[digits[start]][i])
      backtracking(digits, len, start + 1)
      path.pop()
    }
  }
  return ret
}
console.log(letterCombinations('23'))
console.log(letterCombinations(''))