/**
 * 
 * @param {*} root
 * 该题的解题核心是如何找出左叶子节点？
 *  方法：如果一个节点的左子节点视为空 且 左子节点的左子节点和右子节点都为空，
 *  那么这个节点的的左子节点就是左叶子节点 
 */

var sumOfLeftLeaves = function (root) {
  if (root === null) return 0
  let leftVal = sumOfLeftLeaves(root.left)
  let rightVal = sumOfLeftLeaves(root.right)
  let curVal = 0
  if (root.left !== null && root.left.left === null && root.left.right === null) {
    curVal += root.left.val
  }
  return leftVal + rightVal + curVal
}