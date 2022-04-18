/**
 * 第一遍
 * 本题考察的是字符串的搜索，会用到KMP算法
 */

const getNext = require('../../算法/KMP/前缀表.js')
function strStr(haystack, needle) {
  console.log(getNext)
  let next = getNext(needle)
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (needle[j] !== haystack[i] && j > 0) {
      j = next[j-1]
    }
    if (needle[j] === haystack[i]) {
      j++
    }
    // 说明遍历完了，haystack包含needle
    if (j === needle.length) {
      return i - needle.length + 1
    }
  }
  return -1
}

// aabaabaafa
// aabaaf
strStr('aabaabaafa', 'aabaaf')

/**
 * 复盘：
 *  当做完这到题后我们需要思考：
 *    1.为什么当遇到不相同的字符的时候，我们需要将遍历模式串的指针j回退到前一个字符的最长公共
 *      前后缀的长度就OK呢？
 *      其实我们可以这样理解：当我们遇到了要比较的两个字符不想等时候其实就说明在文本串中匹配模式串的本次尝试就失败了，
 *      按暴力解法来说的话，其实就需要从文本串的下一个字符开始重新匹配我们的模式串，但是呢，我们现在知道了该模式串的前缀表
 *      了，表里的每个元素都是该元素下标对应的模式串中(该字符到开头字符)的最长公共前后缀的长度，所以当我们知道前一个字符的最长
 *      公共前后缀的长度后，前缀的元素在之后我们就不需要对比了， 而这个长度其实就是前缀末尾元素的下一个元素， 所以我们直接回退就好
 *    2. 重复理解求字符串的前缀表的算法
 */