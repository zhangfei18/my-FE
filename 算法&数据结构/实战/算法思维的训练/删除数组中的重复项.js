/*
删除给定数组中的重复项，使得每个元素只出现一次，要求原地删除，即不可使用新的数组，
即空间复杂度要为O(1)
*/
let arr = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
function removeDuplicates(arr) {
  let flag = 1
  let lastNum = arr[0]
  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i]
    if(cur > lastNum){
      arr[flag] = cur
      flag++
      lastNum = cur
    }else{
      continue
    }
  }
}
removeDuplicates(arr)