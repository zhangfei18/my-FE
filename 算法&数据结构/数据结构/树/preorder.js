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
// function preOrder(root){
//   if(!root) return
//   console.log(root.val)
//   preOrder(root.left)
//   preOrder(root.right)
// }
// 非递归版
function preOrder(root){
  let stack = [root]
  while(stack.length){
    let c = stack.pop()
    console.log(c.val)
    if(c.right) stack.push(c.right)
    if(c.left) stack.push(c.left)
  }
}
preOrder(bt)