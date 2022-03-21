/*
·第一遍
*/

function isSameTree(p, q) {
  if (!p && !q) {
    return true
  }
  if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true
  } else {
    return false
  }
}