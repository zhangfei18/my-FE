
//本题使用迭代法是最简单的
// 迭代法：
var findBottomLeftValue = function (root) {
  // 层序遍历
  let queue = []
  let ret = []
  queue.push(root)
  while (queue.length) {
    let curLevel = []
    for (let i = queue.length - 1; i >= 0; i--) {
      let cur = queue.shift()
      curLevel.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    ret.push(curLevel)
  }
  return ret.pop()[0]
};
// 递归版
/**
 * 使用递归的方法的话就一定要用前序遍历了， 因为我们是通过深度和叶子节点来判断当前节点
 * 是否要暂存起来，又因为题目要求是最左边的， 所以我们采用前序遍历，因为前序遍历是优先从
 * 左子树开始的
 *  */ 
var findBottomLeftValue = function (root) {
  let maxLen = -Infinity
  let maxLeftVal
  traverse(root, 0)
  function traverse(node, hei) {
    if (node.left === null && node.right === null) {
      if (hei > maxLen) {
        maxLen = hei
        maxLeftVal = node.val
      }
      return
    }
    if (node.left) {
      hei++
      traverse(node.left, hei)
      hei--
    }
    if (node.right) {
      hei++
      traverse(node.right, hei)
      hei--
    }
  }
  return maxLeftVal
}