/*
  第二遍： 补充了reverseString2算法
*/
/*
反转字符串中的单词
e.g. "This is a good example" => "example good a id This" 
*/


/*
  分析：
  复杂度分析： On
  定位问题：遍历 倒序输出
  数据操作： 采用栈数据结构
  编码
*/

// 库函数版
function reverseString() {
  let str = "This is a good example"
  let buffer = str.split(' ').reverse()
  return buffer.join(' ')
}
console.log(reverseString())

// 遍历法
function reverseString2(str) {
  let reg = /[^\s]+/g
  let match = reg.exec(str)
  let stack = []
  while (match) {
    let s = match[0]
    stack.push(s)
    match = reg.exec(str)
  }
  // console.log(stack)
  let res = ''
  while (stack.length) {
    res += stack.pop()
    res += ' '
  }
  return res
}
let res = reverseString2('example good a id This')
console.log(res)

// 完整版
function reverseWords(s) {
  let strArr = Array.from(s)
  // 去除多余空格
  removeExtraSpaces(strArr)
  // 反转
  reverse(strArr, 0, strArr.length - 1)
  let start = 0
  for (let index = 0; index <= strArr.length; index++) {
    if (strArr[index] === ' ' || index === strArr.length){
      reverse(strArr, start, index - 1)
      start = index + 1
    }
  }
  return strArr.join('')
}
function removeExtraSpaces(strArr) {
  let slowIndex = 0
  let fastIndex = 0
  while (fastIndex < strArr.length) {
    if (strArr[fastIndex] === ' ' && (fastIndex === 0 || strArr[fastIndex - 1] === ' ')) {
      fastIndex++
    } else {
      strArr[slowIndex] = strArr[fastIndex]
      slowIndex++
      fastIndex++
    }
  }
  strArr.length = (strArr[slowIndex - 1] === ' ') ? (slowIndex - 1) : slowIndex
}
function reverse(strArr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++
    right--
  }
}
reverseWords('   example    good a id This   ')