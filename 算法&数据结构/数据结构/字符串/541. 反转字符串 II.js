/**
 * 第一遍 2022.3.31-7:10分
 */

// 解题技巧点： index += 2 * k
function reverseStr(s, k) {
  if (!s.length) return []
  let sArr = s.split('')
  let sLen = sArr.length
  let left = 0
  let right = sArr.length - 1
  for (let index = 0; index < sArr.length; index += 2 * k) {
    left = index
    right = (left + k - 1) > sLen ? sLen : (left + k - 1)
    while (left <= right) {
      if (sArr[left] !== sArr[right]) {
        let buffer = sArr[left]
        sArr[left] = sArr[right]
        sArr[right] = buffer
      }
      left++
      right--
    }
  }
  return sArr.join('')
}

