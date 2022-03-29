Array.prototype.quickSort = function quickSort() {
  function rec(arr) {
    if (arr.length <= 1) { return arr }
    let l = arr.length
    let mid = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < l; i++) {
      if (arr[i] <= mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    let retLeft = rec(left)
    let retRight = rec(right)
    return [...retLeft, mid, ...retRight]
  }
  return rec(this)
}
console.log([5, 4, 3, 2, 1].quickSort())