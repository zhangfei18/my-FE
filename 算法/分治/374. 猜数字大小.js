/*
 ·第一遍
*/

function guessNumber(n) {
  let l = 1
  let r = n
  while (l <= r) {
    let pick = Math.floor((l + r) / 2)
    let result = guess(pick)
    if (result === -1) {
      r = pick - 1
    } else if (result === 1) {
      l = pick + 1
    } else if (result === 0) {
      return pick
    }
  }
}