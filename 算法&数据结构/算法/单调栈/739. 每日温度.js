
function dailyTemperatures(temperatures) {
  let stack = []
  let ret = Array.from(temperatures).fill(0)
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop()
      ret[index] = i - index
    }
    stack.push(i)
  }
  return ret
}