/*
  第三遍over
  // 规则：每个人和右边的人比较。如果你比他高， 你就和他换下位置
*/
Array.prototype.bubbleSort = function bubbleSort() {
  let l = this.length
  for (let j = 0; j < l - 1; j++) {
    for (let i = 0; i < l - 1 - j; i++) {
      if (this[i] > this[i + 1]) {
        // let buffer = this[i]
        // this[i] = this[i + 1]
        // this[i + 1] = buffer
        [this[i], this[i + 1]] = [this[i + 1], this[i]]
      }
    }
  }
}
console.log([5, 4, 3, 2, 1].bubbleSort())