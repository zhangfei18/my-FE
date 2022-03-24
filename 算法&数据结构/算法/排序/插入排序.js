Array.prototype.insertionSort = function () {
  for (let index = 1; index < this.length; index++) {
    let curI = index
    let flag = this[curI]
    while(curI > 0){
      if(flag < this[curI - 1]){
        this[curI] = this[curI - 1]
      }else{
        break
      }
      curI--
    }
    this[curI] = flag
  }
}

console.log(([2, 4, 5, 3, 1]).insertionSort())
