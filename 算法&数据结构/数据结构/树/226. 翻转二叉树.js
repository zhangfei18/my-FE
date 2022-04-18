/*
·第一遍
*/

// 递归第一版
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

// 递归第二版
function invertTree_2(root) {
  if (root == null) return root
  [root.left, root.right] = [invertTree_2(root.right), invertTree_2(root.left)]
  return root
}