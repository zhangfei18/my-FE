Array.prototype.quickSort = function quickSort() {
  function rec(arr) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let mid = arr[0]
    for (let index = 1; index < arr.length; index++) {
      if (arr[index] > mid) {
        right.push(arr[index])
      } else if (arr[index] < mid) {
        left.push(arr[index])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  return rec(this)
}
console.log([5, 4, 3, 2, 1].quickSort())