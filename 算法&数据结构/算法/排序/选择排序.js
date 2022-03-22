Array.prototype.selectionSort = function selectionSort() {
  for (let i = 0; i < this.length - 1; i++) {
    let minIndex = i
    // 先查找最小元素
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j
      }
    }
    // 找到之后进行和当前元素进行替换
    if(this[i] !== this[minIndex]){
      let temp = this[i]
      this[i] = this[minIndex]
      this[minIndex] = temp
    }
  }
}
console.log(([5, 4, 3, 2, 1]).selectionSort())
