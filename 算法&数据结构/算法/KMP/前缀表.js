/**
 * 
 * @param {*} needle 需要处理的字符串
 * @returns 
 * i: 代表后缀子串的末尾
 * j: 代表前缀子串的末尾
 * 在遍历的过程中要时刻记住上面i和j代表的含义
 * 我们来模拟一下代码执行的流程：
 * 首先初始化j=0， 然后遍历字符串，（因为i代表后缀子串的末尾，所以可以直接给它赋值1）
 * 在遍历的过程中我们要比较前缀末尾的字符和后缀末尾的字符是否相等，
 *   相等的话肯定就需要将最长前后相等(公共)子串的长度++
 *   不相等的话我们就需要更新当前字符串(也就是i下标前的子串)的最长相等(公共)前后缀的长度，那么要怎么得到当前的最长相等前后缀的长度呢
 *     其实只需要回退j就OK，因为j的值其实也是不包括当前字符的前面所有字符的最长相等前后缀的长度，那么回退到什么时候为止呢？
 *       回退到j和i指向的字符相等的时候就OK了，因为此时的j就是包含当前字符的子串的最长相当前后缀的长度(细品)
 */
function getNext(str) {
  let next = []
  let j = 0
  next[0] = j
  for (let i = 1; i < str.length; i++) {
    while (str[j] !== str[i] && j > 0) {
      j = next[--j]
    }
    if (str[j] === str[i]) {
      j++
    }
    next.push(j)
  }
  return next
}
// console.log(getNext('aabbaaf'))
console.log(getNext('abcabcabcabc'), 'abcabcabcabc'.length)

module.exports = getNext