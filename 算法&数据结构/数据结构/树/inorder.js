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
// 由于中序遍历访问的节点和处理的节点不是一个，所以就需要我们借助
// 指针访问节点，使用栈处理节点。
function inOrder(root) {
  let ret = []
  let stack = []
  let cur = root
  while (stack || cur) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    ret.push(cur.val)
    cur = cur.right
  }
}
inOrder(bt)