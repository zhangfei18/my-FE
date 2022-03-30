/**
 * 第一遍
 */

 function averageOfLevels(root) {
  let ret = []
  let queue = [root]
  if (!root) return ret
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
    ret.push((curLevel.reduce((s, v) => { return s + v }, 0)) / curLevel.length)
  }
  return ret
}