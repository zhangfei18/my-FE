/**
 * 第一遍
 */

function largestValues(root) {
  let ret = []
  if (!root) return ret
  let queue = [root]
  while (queue.length) {
    let curLevel = []
    for (let i = queue.length; i > 0; i--) {
      let cur = queue.shift()
      curLevel.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    ret.push(Math.max.apply(null, curLevel))
  }
  return ret
}