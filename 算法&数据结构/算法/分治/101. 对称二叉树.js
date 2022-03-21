

function isSymmetric(root) {
  function rec(l, r) {
    if (!l && !r) {
      return true
    }
    if (l.val === r.val && rec(l.left, r.right) && rec(l.right, r.left)) {
      return true
    } else {
      return false
    }
  }
  return rec(root.left, root.right)
}