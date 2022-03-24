function instanceof1(obj, Ctor){
  let parent = Object.getPrototypeOf(obj)
  while(parent){
    if(parent === Ctor.prototype){
      return true
    }
    parent = Object.getPrototypeOf(parent)
  }
  return false
}

console.log(instanceof1(new Number(1), String))