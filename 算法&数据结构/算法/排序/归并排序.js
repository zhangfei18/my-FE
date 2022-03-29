Array.prototype.mergeSort = function () {
  function rec(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    let retLeft = rec(left)
    let retRight = rec(right)
    let ret = []
    while (retLeft.length || retRight.length) {
      if (retLeft.length && retRight.length) {
        retLeft[0] > retRight[0] ? ret.push(retRight.shift()) : ret.push(retLeft.shift())
      } else if (retLeft.length) {
        ret.push(retLeft.shift())
      } else if (retRight.length) {
        ret.push(retRight.shift())
      }
    }
    return ret
  }
  let ret = rec(this)
  return ret
}

console.log([5, 4, 3, 2, 1].mergeSort())