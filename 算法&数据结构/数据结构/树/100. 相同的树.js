

function isSameTree(p, q) {
  if (!p && !q) return true
  if (p.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true
  } else {
    return false
  }
}
