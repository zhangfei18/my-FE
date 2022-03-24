Array.prototype.mergeSort = function () {
  function rec(arr) {
    if (arr.length <= 1) return arr
    let ret = []
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    let leftArr = rec(left)
    let rightArr = rec(right)
    while (leftArr.length || rightArr.length) {
      if (leftArr.length && rightArr.length) {
        ret.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift())
      }else if(leftArr.length){
        ret.push(leftArr.shift())
      }else if(rightArr.length){
        ret.push(rightArr.shift())
      }
    }
    return ret
  }
  console.log(rec(this))
}

console.log([5, 4, 3, 2, 1].mergeSort())