

var findMode = function (root) {
  let mp = new Map()
  traverse(root)
  function traverse(node) {
    if (node === null) {
      return node
    }
    if (mp.has(node.val)) {
      mp.set(node.val, mp.get(node.val) + 1)
    } else {
      mp.set(node.val, 1)
    }
    traverse(node.left)
    traverse(node.right)
  }
  let maxCount = 0
  let ret = []
  for (let [key, value] of mp) {
    if (value === maxCount) {
      ret.push(key)
    }
    if (value > maxCount) {
      ret.length = 0
      max = value
      ret.push(key)
    }
  }
  return ret
};