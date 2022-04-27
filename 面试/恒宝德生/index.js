/**
 * 分苹果
 * */

function apple(sum, dffer) {
  let left = sum
  let right = dffer
  while (right <= left) {
    if ((right + left === sum) && (left - right === dffer)) {
      return [left, right]
    }
    right++
    left--
  }
  return undefined
}

console.log(apple(21, 2))
