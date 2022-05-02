


var trap = function (heights) {
  let size = 0
  let stack = []
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    } else if (heights[i] < heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else {
      while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
        // 可以接住雨水了
        let right = heights[i]
        let mid = heights[stack.pop()]
        let left = heights[stack[stack.length - 1]]
        let curSize = (Math.min(left, right) - mid) * (i - stack[stack.length - 1] - 1)
        size += curSize
      }
      stack.push(i)
    }
  }
  return size
}