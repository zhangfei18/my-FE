
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