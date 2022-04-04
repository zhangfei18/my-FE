/**
 * 第一遍 2022.3.31-7:22
 * 解题技巧：
 *  本题属于数组填充类的题型， 像这种类似数组填充类的
 *  题目，其实解题技巧就可以是： 先给数组扩容待填充后的大小i，然后再从后向前
 *  (会涉及到双指针)进行操作
 */


function replaceSpace(s) {
  let sArr = s.split('')
  let sLen = sArr.length
  for (let index = sArr.length - 1; index >= 0; index--) {
    if (sArr[index] === ' ') {
      sArr.length = sArr.length + 2
    }
  }
  let left = sLen - 1
  let right = sArr.length - 1
  while (left >= 0) {
    if (sArr[left] !== ' ') {
      sArr[right] = sArr[left]
      left--
      right--
    } else {
      sArr[right--] = '0'
      sArr[right--] = '2'
      sArr[right--] = '%'
      left--
    }
  }
  console.log(sArr.join(''))
  return sArr.join('')
}

replaceSpace('We are happy.')