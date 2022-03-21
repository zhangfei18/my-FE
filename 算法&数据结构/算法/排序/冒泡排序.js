Array.prototype.bubbleSort = function () {
  for (let i = 1; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }
}
console.log([5, 4, 3, 2, 1].bubbleSort())