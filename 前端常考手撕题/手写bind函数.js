Function.prototype.bind1 = function (context, ...params) {
  // 第一种暂存this
  // let fn = this
  // return function (...args) {
  //   fn.apply(context, [...params, ...args])
  // }
  // 第二种 使用箭头函数
  return (...args) => {
    this.apply(context, [...params, ...args])
  }
}

function testFn(a, b, c) {
  console.log('this', this)
  console.log(a + b + c)
}
let fn = testFn.bind1({ name: 'zf' }, 10)
fn(20, 30)