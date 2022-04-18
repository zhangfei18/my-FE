
// 入栈左括号版本
function isValid(s) {
  let mp = new Map([[')', '('], [']', '['], ['}', '{']])
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (mp.has(s[i])) {
      if (mp.get(s[i]) !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(s[i])
    }
  }
  return !stack.length
}

console.log(isValid("()"))

// 入栈右括号版本
function isValid_1(s) {
  let mp = new Map([['(', ')'], ['[', ']'], ['{', '}']])
  let stack = []
  for (let str of s) {
    if (mp.has(str)) {
      stack.push(mp.get(str))
    } else if (stack.pop() !== str) return false
  }
  return !stack.length
}
isValid_1("(){}}{")