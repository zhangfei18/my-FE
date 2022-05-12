

// 核心思想： 因为我们当前访问的节点可能不是我们想要处理的节点,
// 所以我们采用标记法,  把要处理的节点标记起来(也就是在其后面再添加一个null节点),
let root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: null
  }
}
// 中序遍历
function inOrder(root) {
  let ret = []
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    // 访问过程
    if (node !== null) {
      if (node.right) {
        stack.push(node.right)
      }
      stack.push(node)
      stack.push(null)
      if (node.left) {
        stack.push(node.left)
      }
    } else {
      // 处理过程
      node = stack.pop()
      ret.push(node.val)
    }
  }
  return ret
}

console.log('中序遍历结果:', inOrder(root))

function preOrder(root) {
  let ret = []
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    if (node !== null) {
      if (node.right) {
        stack.push(node.right)
      }
      if (node.left) {
        stack.push(node.left)
      }
      stack.push(node)
      stack.push(null)
    } else {
      node = stack.pop()
      ret.push(node.val)
    }
  }
  return ret
}

console.log('中序遍历结果:', preOrder(root))

function postOrder(root) {
  let ret = []
  let stack = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()
    if (node !== null) {
      stack.push(node)
      stack.push(null)
      if (node.right) {
        stack.push(node.right)
      }
      if (node.left) {
        stack.push(node.left)
      }
    } else {
      node = stack.pop()
      ret.push(node.val)
    }
  }
  return ret
}

console.log('后序遍历结果:', postOrder(root))