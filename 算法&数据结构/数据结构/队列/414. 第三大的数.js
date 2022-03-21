/*
第一遍
*/

function thirdMax(nums) {
  let a = -Number.MAX_VALUE;
  let b = -Number.MAX_VALUE;
  let c = -Number.MAX_VALUE
  for (let n of nums) {
    if (n > c) {
      a = b
      b = c
      c = n
    } else if (n > b && n < c) {
      a = b
      b = n
    } else if (n > a && n < b) {
      a = n
    }
  }
  return a === -Number.MAX_VALUE ? c : a
}


thirdMax([1,2,2,5,3,5])