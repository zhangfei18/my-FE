/**
 * 本题属于回溯法的分割问题
 */

function restoreIpAddresses(s) {
  let ret = []
  let path = []
  let len = s.length
  backtracking(0, 0)
  function backtracking(startIndex) {
    let l = path.length
    if (l === 4 && startIndex === len) {
      ret.push(path.join('.'))
    }
    for (let i = startIndex; i < len; i++) {
      let str = s.substring(startIndex, i + 1)
      if (isValid(str)) {
        path.push(str)
        backtracking(i + 1)
        path.pop()
      }
    }
  }
  return ret
}

function isValid(str) {
  if (str[0] == 0 && str.length > 1) {
    return false
  }
  if (+str > 255 || str.length > 3) {
    return false
  }
  return true
}

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))
console.log(restoreIpAddresses('101023'))