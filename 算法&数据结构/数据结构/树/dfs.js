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
// 树的深度优先遍历 - 注意是树，而不是二叉树
function dfs(root) {
  console.log(root.val)
  root.children.forEach(child => {
    dfs(child)
  });
}
dfs(tree)