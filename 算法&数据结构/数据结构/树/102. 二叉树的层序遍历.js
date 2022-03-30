/**
 * 第一遍
 */

function levelOrder(root) {
  if (!root) return []
  let ret = []
  let queue = [root]
  while (stack.length) {
    let curLevel = []
    for (let i = queue.length - 1; i >= 0; i--) {
      let cur = queue.shift()
      curLevel.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    ret.push(curLevel)
  }
  return ret
}