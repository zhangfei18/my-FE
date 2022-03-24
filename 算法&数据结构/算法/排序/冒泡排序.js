/*
  第二遍
*/
Array.prototype.bubbleSort = function bubbleSort() {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j + 1]
        this[j + 1] = this[j]
        this[j] = temp
      }
    }
  }
}
console.log([5, 4, 3, 2, 1].bubbleSort())