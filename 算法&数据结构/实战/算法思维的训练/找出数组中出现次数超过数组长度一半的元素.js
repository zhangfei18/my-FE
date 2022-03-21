/*
  找出数组中出现次数超过数组长度一半的元素， 要求：空间复杂度只能为O1
*/

let arr = [1, 2, 2, 1, 1, 4, 1, 5, 1]
function searchEleCountMoreHarf(arr) {
  let buffer = arr[0]
  let count = 1
  for (let i = 1; i < arr.length; i++){
    let ele = arr[i]
    if(ele === buffer){
      count++
    }else{
      buffer = ele
    }
  }
}