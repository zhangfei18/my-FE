function new1(Ctor, ...args) {
  let ret = Object.create(Ctor.prototype)
  let res = Ctor.apply(ret, args)
  return typeof res === 'object' ? res : ret
}

function Parent() {

}
let parent = new1(Parent)
console.log(parent instanceof Parent)