Array.prototype.mergeSort = function mergeSort() {
  function rec(arr) {
    let res = []
    if (arr.length === 1) {
      return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)
    let leftArr = rec(left)
    let rightArr = rec(right)
    while (leftArr.length || rightArr.length) {
      if (leftArr.length && rightArr.length) {
        res.push(leftArr[leftArr.length - 1] < rightArr[rightArr.length - 1] ? leftArr.shift() : rightArr.shift())
      } else if (leftArr.length) {
        res.push(leftArr.shift())
      } else if (rightArr.length) {
        res.push(rightArr.shift())
      }
    }
    return res
  }
  let res = rec(this)
  return res
}

console.log([5, 4, 3, 2, 1].mergeSort())