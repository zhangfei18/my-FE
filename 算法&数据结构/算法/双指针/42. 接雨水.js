/**
 * 第一种-双指针法
 */
var trap = function (heights) {
  let len = heights.length
  let lHeight = 0
  let rHeight = 0
  let size = 0
  for (let i = 0; i < len; i++) {
    if (i === 0 || i === len - 1) continue
    let curHeight = heights[i]
    for (let l = i - 1; l >= 0; l--) {
      if (lHeight < heights[l]) {
        lHeight = heights[l]
      }
    }
    for (let r = i + 1; r <= len - 1; r++) {
      if (rHeight < heights[r]) {
        rHeight = heights[r]
      }
    }
    let h = (Math.min(lHeight, rHeight) - curHeight) * 1
    if (h > 0) {
      size += h
    }
    lHeight = 0
    rHeight = 0
  }
  return size
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))

/**
 * 第二种双指针法
 */
// function trap2(heights){
//   let left = 0
//   let right = heights.length-1
//   let size = Math.min(heights[right],  heights[left]) * (right - left-1)
//   while(left < right){
//     if(heights[left] > heights[right]){
//       right--
//     }else{
//       left++
//     }
//     size = Math.max(size, Math.min(heights[right], heights[left]) * (right - left-1))
//   }
//   return size
// }

// console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(trap2([4, 2, 0, 3, 2, 5]))



/**
 * 使用-单调栈-解决
 *  */
function trap2(heights) {
  let stack = []
  let size = 0
  stack.push(0)// 存储第一个下标
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] < heights[stack[stack.length - 1]]) {
      stack.push(i)
    } else if (heights[i] === heights[stack[stack.length - 1]]) {
      stack.pop()
      stack.push(i)
    } else {
      while (stack.length && heights[i] > heights[stack[stack.length - 1]]) {
        let mid = stack.pop()
        if (stack.length) {
          let w = i - stack[stack.length - 1] - 1
          let h = Math.min(heights[i], heights[stack[stack.length - 1]]) - heights[mid]
          size += w * h
        }
      }
      stack.push(i)
    }
  }
  return size

}

console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap2([4, 2, 0, 3, 2, 5]))