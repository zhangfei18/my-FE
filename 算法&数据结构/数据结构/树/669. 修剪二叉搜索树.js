

var trimBST = function (root, low, high) {
  if (root === null) {
    return root
  }
  // 如果当前val小于最小值，那么当前节点的左子树肯定百分百
  // 也不满足条件，可以直接舍弃了
  if (root.val < low) {
    let right = trimBST(root.right, low, high)
    // if(right){
    return right
    // }
  }
  // 如果当前val大于最大值，那么当前节点的右子树肯定百分百
  // 也不满足条件，可以直接舍弃了
  if (root.val > high) {
    let left = trimBST(root.left, low, high)
    // if(left){
    return left
    // }
  }
  // 当前节点的右子树接住下一层的递归的返回值，这其中有不满足的节点就会直接被舍弃了
  root.right = trimBST(root.right, low, high)
  // 左子树同理
  root.left = trimBST(root.left, low, high)
  return root
}