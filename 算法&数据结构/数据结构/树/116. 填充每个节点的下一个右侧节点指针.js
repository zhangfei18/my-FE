/**
 * 第一遍
 */

function connect(root) {
  if (!root) return root
  let queue = [root]
  while (queue.length) {
    let n = queue.length
    for (let index = 1; index <= n; index++) {
      let cur = queue.shift()
      if (index < n) {
        cur.next = queue[0]
      } else {
        cur.next = null
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return root
}