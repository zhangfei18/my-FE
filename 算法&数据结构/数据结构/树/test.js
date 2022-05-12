

var isSameTree = function (root1, root2) {

  if (root1.val === root2.val) {
    return true
  } else if (root1 === null && root2 === null) {
    return true
  } else if (root1.val !== root2.val) {
    return false
  } else if (root1 === null && root2) {
    return false
  } else if (root1 && root2 === null) {
    return false
  } else {
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
}