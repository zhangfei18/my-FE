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

// 原地快排 - 双指针
function getIndex(arr, start, end) {
  let init = start
  let flag = arr[init]
  start++
  while (start < end) {
    while (arr[start] <= flag) {
      start++
    }
    while (arr[end] > flag) {
      end--
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  // 让flag归为到属于它的位置上
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]
  return start
}
function quickSort_1(arr) {
  let start = 0
  let end = arr.length - 1
  if (start < end) {
    let index = getIndex(arr, start, end)
    quickSort_1(arr, start, index - 1)
    quickSort_1(arr, index, end)
  }
}