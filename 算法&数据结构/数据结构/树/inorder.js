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
// function inOrder(root){
//   if(!root) return
//   inOrder(root.left)
//   console.log(root.val)
//   inOrder(root.right)
// }


// 非递归版 - 左根右
function inOrder(root) {
  let stack = [root]
  let cur = root.left
  while (stack.length || cur) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    let c = stack.pop()
    console.log(c.val)
    cur = c.right
  }
}
inOrder(bt)