/**
 * 
 * @param {*} tokens 
 * @returns 
 * 
 * 技巧：
 * 知识点：Map构造函数可以将一个二维键值对数组转换成一个Map对象
 */

function evalRPN(tokens) {
  let operationMap = new Map([
    ['+', (a, b) => a * 1 + b * 1],
    ['-', (a, b) => b - a],
    ['*', (a, b) => a * b],
    ['/', (a, b) => (b / a) | 0],
  ])
  let stack = []
  for (let token of tokens) {
    if (operationMap.has(token)) {
      stack.push(operationMap.get(token)(stack.pop(), stack.pop()))
    } else {
      stack.push(token)
    }
  }
  return stack.pop()
}

evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])