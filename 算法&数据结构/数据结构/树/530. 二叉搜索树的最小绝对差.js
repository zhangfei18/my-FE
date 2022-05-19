

var getMinimumDifference = function (root) {
  let pre = null
  let min = +Infinity
  traverse(root)
  function traverse(cur) {
    if (cur === null) {
      return
    }
    traverse(cur.left)
    if (pre !== null) {
      min = Math.min(min, Math.abs(cur.val - pre.val))
    }
    pre = cur
    traverse(cur.right)
  }
  return min
};