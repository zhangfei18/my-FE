/**
 * 技巧： 像反转字符串中的单词这种， 就可以考虑使用双指针来解题
 * 注意： 但本题中需要提前处理一下多余(大于一个)空格的问题
 */

function reverseWords(s) {
  let sArr = Array.from(s)
  // 先去除空格
  removeExtraSpaces(sArr)
  // 反转给定范围内的字符
  reverse(sArr, 0, sArr.length - 1)
  let start = 0
  for (let i = 0; i <= sArr.length; i++) {
    if (sArr[i] === ' ' || i === sArr.length) {
      reverse(sArr, start, i-1)
      start = i + 1
    }
  }
  console.log(sArr)
}
reverseWords('  hello world  ')
// '  hello world  '
function removeExtraSpaces(sArr) {
  let slowI = 0
  let fastI = 0
  while (fastI < sArr.length) {
    if (sArr[fastI] === ' ' && (sArr[fastI - 1] === ' ' || fastI === 0)) {
      fastI++
    } else {
      sArr[slowI] = sArr[fastI]
      slowI++
      fastI++
    }
  }
  sArr.length = sArr[slowI - 1] === ' ' ? slowI - 1 : slowI
  return sArr
}
// removeExtraSpaces(Array.from('  hello world  '))

function reverse(sArr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    [sArr[left], sArr[right]] = [sArr[right], sArr[left]]
    left++
    right--
  }
  console.log(sArr)
}
// reverse(Array.from('hello world'), 0, 10)