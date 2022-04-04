/**
 * 第一遍 2022.3.31-
 */

// 第一个版本需要申请额外的空间
function reverseLeftWords(s, n) {
  let sArr = Array.from(s)
  reverse(sArr, 0, n - 1)
  reverse(sArr, n, sArr.length - 1)
  reverse(sArr, 0, sArr.length - 1)
  return sArr.join('')
}
function reverse(s, start, end) {
  let left = start
  let right = end
  while (left < right) {
    [sArr[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
}

// abcdefg cdefgab 
function reverseLeftWords2(s, n) {
  let length = s.length
  let i = 0
  while (i < length - n) {
    s = s[length - 1] + s
    i++
  }
  return s.slice(0, length)
}
reverseLeftWords2('lrloseumgh', 6)