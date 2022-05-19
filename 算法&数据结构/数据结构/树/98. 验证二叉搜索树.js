

var isValidBST = function (root) {
  let max = -Infinity
  return traverse(root)
  function traverse(root) {
    if (root === null) {
      return true
    }

    let left = traverse(root.left)
    if (max < root.val) {
      max = root.val
    } else {
      return false
    }
    let right = traverse(root.right)
    return left && right
  }
};