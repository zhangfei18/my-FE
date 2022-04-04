/**
 * 第一遍 2022.3.31-6:57分
 */

function reverseString(s) {
  if (!s.length) return []
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] !== s[right]) {
      let buffer = s[left]
      s[left] = s[right]
      s[right] = buffer
    }
    left++
    right--
  }
  return s
}

