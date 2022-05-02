/**
 * 本题和接雨水的思路是一样的，
 * 也是找每个元素(也就是每个柱子)能和左边第一个比自己小的柱子以及右边第一个比自己小的柱子
 * 能形成的面积(这个正好是和接雨水是相反的， 因为雨水要找左边第一个比自己大的以及右边第一个比自己大的，
 * 才能接住雨水)
 */

var largestRectangleArea = function (heights) {
  let size = 0
  let stack = []
  heights = [0, ...heights, 0]// 注意一定要加这行代码， 否则还有意外case： [2,4]
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else if (heights[i] === heights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    } else {
      while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
        let midIndex = stack.pop()
        if (stack.length) {
          let mid = heights[midIndex]
          let w = i - stack[stack.length - 1] - 1
          let h = mid
          size = Math.max(size, w * h)
        }
      }
      stack.push(i)
    }
  }
  return size
};