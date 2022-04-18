
function walk(root, list) {
  if (root === null) {
    return root
  }
  list.push(root)
  walk(root.left, list)
  walk(root.right, list)
}
var flatten = function (root) {
  if (root === null) {
    return root
  }
  let list = []
  walk(root, list)
  for(let i = 1; i < list.length; i++){
    let prev = list[i-1]
    let cur = list[i]
    prev.left = null
    prev.right = cur
  }
  return root
}