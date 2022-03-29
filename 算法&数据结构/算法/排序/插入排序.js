Array.prototype.insertionSort = function () {
  for (let index = 1; index < this.length; index++) {
    let curIndex = index
    let curEle = this[curIndex]
    while (curIndex > 0) {
      if (curEle < this[curIndex - 1]) {
        this[curIndex] = this[curIndex - 1]
      }else{
        break
      }
      curIndex--
    }
    this[curIndex] = curEle
  }
  return this
}

console.log(([2, 4, 5, 3, 1]).insertionSort())
