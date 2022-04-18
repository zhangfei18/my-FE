
let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}
var diameterOfBinaryTree = function (root) {
  let max = 0
  function dfs(root) {
    if (root === null) return root
    let left = dfs(root.left)
    let right = dfs(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return max
}
console.log(diameterOfBinaryTree(root))