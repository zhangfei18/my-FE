/**
 * 第一遍
 * 
 * 本题我们依然可以使用KMP算法来解决
 * 复盘：
 *  KMP算法：用于在一个字符串里面查找另一个字符串是否出现过，这是KMP算法的看家本领
 *  但是为什么本题也可以使用KMP算法来解决呢？
 *    因为：我们的next数组前缀表的最后一个元素其实就是整个字符串的最长公共前后缀的的长度，
 *    我们来看这个字符换abab，他的next数组的最后一个值是2, 其实就是说明这个字符串中有个前后两个
 *    相同的子串，当我们用字符串长度-next[len-1]的时候其实就相当于是减去了一个周期，然后再用
 *    len % 剩下的长度，如果能整除其实就表示这个数组就是这个周期的循环
 */

function getNext(needle) {
  let next = []
  let j = 0
  next.push(j)
  for (let index = 1; index < needle.length; index++) {
    while (needle[index] !== needle[j] && j > 0) {
      j = next[j - 1]
    }
    if (needle[index] === needle[j]) {
      j++
    }
    next.push(j)
  }
  return next
}

function repeatedSubstringPattern(s) {
  let len = s.length
  let next = getNext(s)
  return next[len - 1] !== 0 && (len % (len - next[len - 1]) === 0)
}

console.log(repeatedSubstringPattern('abab'))