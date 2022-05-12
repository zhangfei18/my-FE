


var binaryTreePaths = function (root) {
  let ret = []
  function traverse(node, path) {
    if (node.left === null && node.right === null) {
      ret.push(path)
      return
    }
    traverse(node.left, path + node.val + '->')
    traverse(node.right, path + node.val + '->')
  }
  traverse(root, '')
  return ret
}