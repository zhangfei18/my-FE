/*
  第三遍
*/
Array.prototype.selectionSort = function selectionSort() {
  for (let i = 0; i < this.length - 1; i++) {
    let minI = i
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[minI]) {
        minI = j
      }
    }
    if (minI !== i) {
      let buffer = this[i]
      this[i] = this[minI]
      this[minI] = buffer
    }
  }
}
console.log(([5, 4, 3, 2, 1]).selectionSort())
