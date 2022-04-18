/**
 * 在一个有序数组中，查找出第一个大于9的数字，假设一定存在。
 * 例如，arr = [-1, 3,3,7,10,14,14], 返回10
 * */
let arr = [-1, 3, 3, 7, 10, 14, 14]
function search(arr, target) {
  let left = 0
  let right = arr.length - 1
  let middle = undefined
  while (left <= right) {
    middle = (left + right) / 2
    if (target < arr[middle] && (arr[middle - 1] <= target || middle === 0)) {
      return middle
    } else if (target > arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
}
console.log(search(arr, 9))
