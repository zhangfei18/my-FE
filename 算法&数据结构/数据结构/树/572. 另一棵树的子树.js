

let isSubtree = function (root, subRoot) {
  if (root === null) {
    return false
  }
  // 大树的节点和子树的根节点相同开始比较
  if (root.val === subRoot.val) {
    // 如果当前节点的子树是和subTree相同则返回true
    if (isSameTree(root, subRoot)) {
      return true
    }
    // 否则需要继续找相同的节点开始比较
  }
  // 不相同否则需要继续找相同的节点开始比较
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

}

function isSameTree(root1, root2) {
  if (root1 === null && root2 === null) {
    return true
  } else if (root1 === null && root2) {
    return false
  } else if (root1 && root2 === null) {
    return false
  } else if (root1.val !== root2.val) {
    return false
  } else {
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
}