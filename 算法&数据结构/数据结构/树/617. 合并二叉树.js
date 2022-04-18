

var mergeTrees = function (root1, root2) {
  function walk(root1, root2) {
    if (!root1 || !root2) {
      return (root1 || root2)
    }
    root1.val += root2.val
    root1.left = walk(root1.left, root2.left)
    root1.right = walk(root1.right, root2.right)
    return root1
  }
  return walk(root1, root2)
}