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
function postOrder(root) {
  if (!root) return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val)
}

// 非递归版 - 左右根 - 所以只需要吧=把先序遍历的顺序反着输出出来就OK了， 因此需要用到栈结构
function postOrder(root) {
  let stack = [root]
  let outputStack = []
  while (stack.length) {
    let c = stack.pop()
    outputStack.push(c)
    if (c.left) stack.push(c.left)
    if (c.right) stack.push(c.right)
  }
  while (outputStack.length) {
    console.log(outputStack.pop().val)
  }
}
postOrder(bt)