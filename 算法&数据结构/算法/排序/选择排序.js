Array.prototype.selectionSort = function selectionSort() {
  for (let i = 0; i < this.length - 1; i++) {
    let minI = i
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[minI]) {
        minI = j
      }
    }
    if (minI !== i) {
      let temp = this[minI]
      this[minI] = this[i]
      this[i] = temp
    }
  }
}
console.log(([5, 4, 3, 2, 1]).selectionSort())
