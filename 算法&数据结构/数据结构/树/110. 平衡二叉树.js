

var isBalanced = function (root) {
  let ret
  function postTraverse(node) {
    if (node === null) {
      return 0
    }
    let leftHeight = postTraverse(node.left)
    let rightHeight = postTraverse(node.right)
    if (leftHeight === -1 || rightHeight === -1) {
      return -1
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    } else {
      return Math.max(leftHeight, rightHeight) + 1
    }
  }
  ret = postTraverse(root)
  return ret !== -1
}