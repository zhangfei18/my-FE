
// 和求二叉树的深度的原理是一样的
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  let depth = 0
  for (let i = 0; i < root.children.length; i++) {
    depth = Math.max(depth, maxDepth(children[i]))
  }
  return depth + 1
};