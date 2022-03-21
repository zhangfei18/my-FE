/*
·第一遍
*/

function invertTree(root) {
  if (!root || (root.left === null && root.right === null)) {
    return root
  }
  return {
    val: root.val,
    left: invertTree(root.right),
    right: invertTree(root.left),
  }
}