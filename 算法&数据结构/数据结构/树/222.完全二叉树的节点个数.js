

// 本题有3个解法：普通迭代法(后序遍历) 、 迭代法(层序遍历) 、 利用完全二叉树的性质的递归法


// 普通迭代法(后序遍历)
var countNodes = function (root) {
  if (root === null) {
    return 0
  }
  let leftCounts = countNodes(root.left)
  let rightCounts = countNodes(root.right)
  return leftCounts + rightCounts + 1
}

// 迭代法(层序遍历)
var countNodes = function (root) {
  let queue = []
  let all = 0
  queue.push(root)
  while (queue.length) {
    let curLevel = []
    for (let i = queue.length - 1; i >= 0; i--) {
      let cur = queue.shift()
      curLevel.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    all += curLevel.length
  }
  return all
}

// 利用完全二叉树的性质的递归法
var countNodes = function (root) {
  if (root === null) {
    return 0
  }
  let leftHeight = 0
  let rightHeight = 0
  let left = root.left
  let right = root.right
  while (left) {
    left = left.left
    leftHeight++
  }
  while (right) {
    right = right.right
    rightHeight++
  }
  if (leftHeight === rightHeight) {
    return 2 << leftHeight - 1
  }
  return countNodes(root.left) + countNodes(root.right) + 1
}
