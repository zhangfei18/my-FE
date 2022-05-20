/**
 * 采用后续遍历-天然的回溯法
 */

var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root.val === p.val || root.val === q.val) {
    return root
  }
  let left = lowestCommonAncestor(root.left,  p, q)
  let right = lowestCommonAncestor(root.right,  p, q)
  if (left && right) {
    return root
  } else if (left !== null && right === null) {
    return left
  } else if (left === null && right !== null) {
    return right
  } else {
    return null
  }
};