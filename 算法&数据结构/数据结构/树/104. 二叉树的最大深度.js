
const bt = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'd',
      left: null,
      right: null
    },
    right: {
      val: 'e',
      left: null,
      right: null
    }
  },
  right: {
    val: 'c',
    left: {
      val: 'f',
      left: null,
      right: null
    },
    right: {
      val: 'g',
      left: null,
      right: null
    }
  }
}

// 递归版1 - 使用后续遍历 
function maxDepth(root) {
  if (root === null) {
    return 0
  }
  let dl = maxDepth(root.left)
  let dr = maxDepth(root.right)
  return 1 + Math.max(dl, dr)
}
maxDepth(bt)




// 迭代版
function maxDepth2(root) {
  let depth = 0
  if (!root) return depth
  let queue = [root]
  while (queue.length) {
    depth++
    for (let index = queue.length - 1; index >= 0; index--) {
      let cur = queue.shift()
      if (!cur.left && cur.right) {
        return
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return depth
}