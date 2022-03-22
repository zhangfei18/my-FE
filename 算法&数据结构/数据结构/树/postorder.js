const bt = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'd',
      left: null,
      right: null
    },
    right: {
      val: 'e',
      left: null,
      right: null
    }
  },
  right: {
    val: 'c',
    left: {
      val: 'f',
      left: null,
      right: null
    },
    right: {
      val: 'g',
      left: null,
      right: null
    }
  }
}

// 递归版
// function postOrder(root) {
//   if (!root) return
//   postOrder(root.left)
//   postOrder(root.right)
//   console.log(root.val)
// }

// 非递归版
function postOrder(root) {
  let stack = []
  let outputStack = []
  stack.push(root)
  while (stack.length) {
    let n = stack.pop()
    outputStack.push(n)
    if (n.left) { stack.push(n.left) }
    if (n.right) { stack.push(n.right) }
  }
  console.log(outputStack)
  while (outputStack.length) {
    console.log(outputStack.pop().val)
  }
}
postOrder(bt)