// 本题利用二叉搜索树的特性， 如果当前节点比要找的两个节点都大，那么说明要找的两个节点在
// 当前节点的左侧，相反同理。如果要找的两个节点正好在当前节点的一左一右上那么当前节点肯定是
// 这两个节点的最近公共祖先了

var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root
  }
  if (root.val > p.val && root.val > q.val) {
    let left = lowestCommonAncestor(root.left, p, q)
    if (left) {
      return left
    }
  }
  if (root.val < p.val && root.val < q.val) {
    let right = lowestCommonAncestor(root.right, p, q)
    if (right) {
      return right
    }
  }
  return root
}