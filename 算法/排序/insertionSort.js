Array.prototype.insertionSort = function insertionSort() {
  for (let i = 1; i < this.length; i++) {
    let flag = i
    let temp = this[flag]
    while (flag > 0) {
      if (temp < this[flag - 1]) {
        this[flag] = this[flag - 1]
      } else {
        break
      }
      flag--
    }
    this[flag] = temp
  }
}

// console.log([5, 4, 3, 2, 1].insertionSort())
console.log([2, 4, 5, 3, 1].insertionSort())