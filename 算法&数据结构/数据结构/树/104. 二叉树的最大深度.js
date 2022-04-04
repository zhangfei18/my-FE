
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

// 递归版
function maxDepth(root) {
  let res = 0
  function dfs(root, dep) {
    if (!root) return
    if (!root.left && !root.right) {
      res = Math.max(res, dep)
    }
    dfs(root.left, dep + 1)
    dfs(root.right, dep + 1)
  }
  dfs(root, dep = 1)
  console.log(res)
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
      if(!cur.left && cur.right){
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