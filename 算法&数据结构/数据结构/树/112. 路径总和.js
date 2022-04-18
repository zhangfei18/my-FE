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

// var hasPathSum = function (root, targetSum) {
//   if (!root) return false
//   let stack = []
//   let is = false
//   function dfs(root) {
//       if (!root) return
//       stack.push(root.val)
//       if (!root.left && !root.right) {
//           let sum = stack.reduce((sum, num) => {
//               return sum + num
//           }, 0)
//           if(sum === targetSum) is = true
//       }
//       root.left && dfs(root.left)
//       root.right && dfs(root.right)
//       stack.pop()
//   }
//   dfs(root)
//   return is
// };
function hasPathSum(root, targetSum) {
  if (!root) return false
  let is = false
  function dfs(root, sum) {
    if (!root.left && !root.right && sum === targetSum) {
      is = true
    }
    dfs(root.left, sum + root.left.val)
    dfs(root.right, sum + root.right.val)
  }
  dfs(root, root.val)
  return is
}
console.log(hasPathSum(bt, 22))