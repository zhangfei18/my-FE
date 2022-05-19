

var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) {
    return null
  }
  return traverse(inorder, postorder)
  function traverse(inorder, postorder) {
    // 边界
    if (inorder.length === 0 || postorder.length === 0) {
      return null
    }
    // 取出后续数组追最后一个元素
    let postLast = postorder.pop()
    // 创建根节点
    let root = new TreeNode(postLast)
    // 找到其在中序数组中的位置
    let index = inorder.indexOf(postLast)
    // 切割中序数组
    let leftInorder = inorder.slice(0, index)
    let rightInorder = inorder.slice(index + 1)
    // 切割后序数组
    let leftPostorder = postorder.slice(0, leftInorder.length)
    let rightPostorder = postorder.slice(leftInorder.length)
    // 递归
    root.left = traverse(leftInorder, leftPostorder)
    root.right = traverse(rightInorder, rightPostorder)
    return root
  }
};