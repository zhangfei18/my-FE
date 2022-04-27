

function partition(s) {
  let ret = [] // 存放最后的结果
  let path = [] // 存放分割的字符串
  backtraking(0)
  function backtraking(startIndex) {
    if (startIndex >= s.length) {
      ret.push(path.slice())
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isHuiWen(s, startIndex, i)) {
        path.push(s.substring(startIndex, i+1))
        backtraking(i + 1)
        path.pop()
      } else {
        continue
      }
    }
  }
  return ret
}

// 工具函数：判断是不是回文字符串
function isHuiWen(s, start, end) {
  let left = start
  let right = end
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
console.log(partition('aab'))