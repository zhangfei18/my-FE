var trap = function (heights) {
  let size = 0
  let stack = []
  // stack.push(0)
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    } else if (heights[i] < heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else {
      while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
        // 可以接住雨水了
        let midIndex = stack.pop()
        if (stack.length) {
          let right = heights[i]
          let mid = heights[midIndex]
          let left = heights[stack[stack.length - 1]]
          let w = i - stack[stack.length - 1] - 1
          let h = Math.min(left, right) - mid
          let curSize = w * h
          size += curSize
        }
      }
      stack.push(i)
    }
  }
  return size

};