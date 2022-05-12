

function isSameTree(p, q) {
  if (!p && !q) return true
  if (p.val === p.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true
  } else {
    return false
  }
}


// 可以看到下面的这种解法，并没有在root1.val === root2.val相同的时候
// 明确返回true， 那是因为我们使用递归走到最深处的时候肯定会走到root1和root2都是null的case，
// 此时自然会返回true
var isSameTree = function (root1, root2) {
  if (root1 === null && root2 === null) {
    return true
  } else if (root1 && root2 === null) {
    return false
  } else if (root1 === null && root2) {
    return false
  } else if (root1.val !== root2.val) {
    return false
  } else {
    // 走到这其实就是 两个节点的值相等的情况, 因为继续向下递归
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
}
