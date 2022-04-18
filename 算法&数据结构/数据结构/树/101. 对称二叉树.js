

function isSymmetric(root) {
  function rec(root1, root2) {
    if (!root1 && !root2) {
      return true
    }
    if (root1.val === root2.val && rec(root1.left, root2.right) && rec(root1.right, root2.left)) {
      return true
    } else {
      return false
    }
  }
  return rec(root.left, root.right)
}