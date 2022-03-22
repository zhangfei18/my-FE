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
  let stack = []
  stack.push(root)
  while(stack.length){
    const current = stack.pop()
    console.log(current.val)
    if(current.right){
      stack.push(current.right)
    }
    if(current.left){
      stack.push(current.left)
    }
  }  
}
preOrder(bt)