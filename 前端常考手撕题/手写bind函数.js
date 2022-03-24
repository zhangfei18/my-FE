Function.prototype.bind1 = function () {
  let fn = this
  let _t = arguments[0]
  let arg = [].slice.call(arguments, 1)
  return function (...args) {
    fn.apply(_t, [...arg, ...args])
  }
}

function testFn(a, b, c) {
  console.log('this', this)
  console.log(a + b + c)
}
let fn = testFn.bind1({ name: 'zf' }, 10)
fn(20,30)