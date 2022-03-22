/*
第一遍
*/ 
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: []
        },
        {
          val: 'e',
          children: []
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: []
        },
        {
          val: 'g',
          children: []
        }
      ]
    }
  ]
}
// 树的广度优先遍历 - 注意是树，而不是二叉树
function bfs(root){
  let queue = []
  queue.push(root)
  while(queue.length){
    const current = queue.shift()
    console.log(current.val)
    current.children.forEach((child) => {
      queue.push(child)
    })
  }
}
bfs(tree)