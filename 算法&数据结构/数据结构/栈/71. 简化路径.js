

// /home//foo/
function simplifyPath(path) {
  let stack = []
  let ret = ''
  let pathArr = path.split('/')
  pathArr.forEach((p) => {
    if (p === '..') {
      stack.pop()
    } else if (p && p !== '.') {
      stack.push(p)
    } 
  })
  ret = '/' + stack.join('/')
  return ret
}