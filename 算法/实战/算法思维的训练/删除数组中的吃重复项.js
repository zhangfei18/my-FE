/*
删除给定数组中的重复项，使得每个元素只出现一次，要求原地删除，即不可使用新的数组，
即空间复杂度要为O(1)
*/
function deleteRepeat() {
  let arr = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
  let flag = arr[0]
  let len = 1
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > flag) {
      arr[len] = element
      flag = arr[len]
      len++
    } else {
      continue
    }
  }
  arr.length = len
  console.log(`去重后的数组是：${arr}, 长度是：${len}`)
}
deleteRepeat()