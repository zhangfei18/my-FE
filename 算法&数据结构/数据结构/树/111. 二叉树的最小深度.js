
// const bt = {
//   val: 'a',
//   left: {
//     val: 'b',
//     left: {
//       val: 'd',
//       left: null,
//       right: null
//     },
//     right: {
//       val: 'e',
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 'c',
//     left: {
//       val: 'f',
//       left: null,
//       right: null
//     },
//     right: {
//       val: 'g',
//       left: null,
//       right: null
//     }
//   }
// }


const bt = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

// 递归版
function minDepth(root) {
  if (!root) return 0

  let dl = minDepth(root.left)
  let dr = minDepth(root.right)
  // 如果左子树是空， 此时如果返回1 + Math.min(dl, dr) 结果肯定是1
  // 但是此时左子树并不是叶子节点， 因为我们要返回右子树的高度+1
  if (root.left === null && root.right) {
    // 进入这里 说明不是叶子节点， 因为叶子节点肯定是左右子树都是null
    return dr + 1
  }
  // 如果右子树是空， 此时如果返回1 + Math.min(dl, dr) 结果肯定是1
  // 但是此时右子树并不是叶子节点， 因为我们要返回左子树的高度+1
  if (root.left && root.right === null) {
    return dl + 1
  }
  return 1 + Math.min(dl, dr)
}

minDepth(bt)

// 非递归版
function minDepth2() {
  let depth = 0
  if (!root) return depth
  let queue = [root]
  while (queue.length) {
    depth++
    for (let index = queue.length - 1; index >= 0; index--) {
      let cur = queue.shift()
      if (!cur.left && !cur.right) {
        return depth
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
  }
  return depth
}