/*
  第三遍over
*/
Array.prototype.bubbleSort = function bubbleSort() {
  let l = this.length
  for (let j = 0; j < l - 1; j++) {
    for (let i = 0; i < l - 1 - j; i++) {
      if (this[i] > this[i + 1]) {
        let buffer = this[i]
        this[i] = this[i + 1]
        this[i + 1] = buffer
      }
    }
  }
}
console.log([5, 4, 3, 2, 1].bubbleSort())