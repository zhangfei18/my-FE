Array.prototype.quickSort = function quickSort() {
  function rec(arr) {
    if (arr.length <= 1) return arr
    let mid = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      }
      if (arr[i] > mid) {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  let ret = rec(this)
  ret.forEach((element, index) => {
    this[index] = element
  })
  console.log(ret)
}
console.log([5, 4, 3, 2, 1].quickSort())