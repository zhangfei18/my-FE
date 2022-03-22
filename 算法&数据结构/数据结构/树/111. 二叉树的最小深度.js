
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
function minDepth(root) {
  if(!root) return 0
  let depArr = []
  function dfs(root, dep) {
    if (!root) return
    if (!root.left && !root.right) {
      depArr.push(dep)
    }
    dfs(root.left, dep + 1)
    dfs(root.right, dep + 1)
  }
  dfs(root, dep = 1)
  console.log(Math.min.apply(null, depArr))
}

minDepth(bt)