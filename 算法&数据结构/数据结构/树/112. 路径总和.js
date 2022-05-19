let bt = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}

// 本题显然是只需要遍历某一路径， 当某一路径符合题目条件后需要返回了
// 所以需要返回值
function hasPathSum(root, targetSum) {
  if (!root) return false
  return dfs(root, root.val)
  function dfs(root, sum) {
    if (!root.left && !root.right) {
      if (sum === targetSum) {
        return true
      } else {
        return false
      }
    }
    if (root.left) {
      return dfs(root.left, sum + root.left.val)
    }
    if (root.right) {
      return dfs(root.right, sum + root.right.val)
    }
    return false
  }
}
console.log(hasPathSum(bt, 22))