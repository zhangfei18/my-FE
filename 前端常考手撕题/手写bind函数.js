Function.prototype.bind1 = function (context, ...params) {
  // 第一种暂存this
  // let fn = this
  // return function (...args) {
  //   fn.apply(context, [...params, ...args])
  // }
  // 第二种 使用箭头函数
  // return (...args) => {
  //   this.apply(context, [...params, ...args])
  // }
  // 第三- 考虑到可能会new bind过的函数
  let fn = this
  let bind = function (...args) {
    fn.apply(context, [...params, ...args])
  }
  let proto = Object.create(fn.prototype)
  bind.prototype = proto
  return bind
}

function testFn(a, b, c) {
  console.log('this', this)
  console.log(a + b + c)
}
let fn = testFn.bind1({ name: 'zf' }, 10)
let o = new fn(20, 30)
console.log(o instanceof testFn)
console.log(o instanceof fn)


// Function.prototype.bind = function (obj, arg) {
//   var arg = Array.prototype.slice.call(arguments, 1);
//   var context = this;
//   var bound = function (newArg) {
//     arg = arg.concat(Array.prototype.slice.call(newArg));
//     return context.apply(obj, arg);
//   }
//   var F = function () { } //这里需要一个寄生组 合继承 
//   F.prototype = context.prototype;
//   bound.prototype = new F();
//   return bound;
// }