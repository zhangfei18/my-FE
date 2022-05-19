

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }
  return traverse(preorder, inorder)
  function traverse(preorder, inorder) {
    // 边界
    if (preorder.length === 0 || inorder.length === 0) {
      return null
    }
    // 取出后续数组追最后一个元素
    let preFirst = preorder.shift()
    // 创建根节点
    let root = new TreeNode(preFirst)
    // 找到其在中序数组中的位置
    let index = inorder.indexOf(preFirst)
    // 切割中序数组
    let leftInorder = inorder.slice(0, index)
    let rightInorder = inorder.slice(index + 1)
    // 切割后序数组
    let leftPreorder = preorder.slice(0, leftInorder.length)
    let rightPreorder = preorder.slice(leftInorder.length)
    // 递归
    root.left = traverse(leftPreorder, leftInorder)
    root.right = traverse(rightPreorder, rightInorder)
    return root
  }
};