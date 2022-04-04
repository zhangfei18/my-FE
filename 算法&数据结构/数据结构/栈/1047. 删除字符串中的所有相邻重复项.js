

function removeDuplicates(s) {
  let len = s.length
  let stack = []
  for (let i = 0; i < len; i++) {
    if (stack[stack.length - 1] !== s[i]) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.join('')
}