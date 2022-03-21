/*


*/

let tree = {
  root: true,
  val: 99,
  left: {
    val: 88,
    left: {
      val: 77
    },
    right: {
      val: 66,
      left: {
        val: 55
      },
      right: {
        val: 44
      }
    }
  },
  right: {
    val: 33,
    left: {
      val: 22
    },
    right: {
      val: 11
    }
  }
}

function levelTranverse(tree) {
  let result = []
  let buffer = [tree]
  while (buffer.length) {
    let current = buffer.shift()
    current && result.push(current.val)
    if(current.left){
      buffer.push(current.left)
    }
    if(current.right){
      buffer.push(current.right)
    }
  }
  console.log(result)
}
levelTranverse(tree)