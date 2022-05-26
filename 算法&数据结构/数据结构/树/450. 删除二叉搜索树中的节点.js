

var deleteNode = function (root, key) {
  if (root === null) {
    return root
  }
  if (root.val === key) {
    if (root.left === null && root.right === null) {
      return null
    } else if (root.left === null) {
      return root.right
    } else if (root.right === null) {
      return root.left
    } else {
      // 最麻烦的一种情况 - 左右子树都存在
      let cur = root.right
      while (cur.left !== null) {
        cur = cur.left
      }
      cur.left = root.left
      root = root.right
      return root
    }
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  }
  return root
};