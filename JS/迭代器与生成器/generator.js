// 为什么要有生成器？ 可迭代对象的迭代器对象、迭代结果对象把事情搞得有点复杂

// demo1
function* oneDigitPrimes() {
  yield 1
  yield 2
  yield 3
  yield 4
}
// 调用生成器函数 得到一个生成器对象
let primes = oneDigitPrimes()
console.log('demo1', primes.next().value)
console.log('demo1', primes.next().value)
console.log('demo1', primes.next().value)
console.log('demo1', primes.next().value)
console.log('demo1', primes.next().value)

// 生成器对象本身也是一个可迭代对象
console.log(primes[Symbol.iterator])// => Function

// demo2 - 斐波那契
function* fibonacciSequence() {
  let x = 0
  let y = 1
  for (; ;) {
    // console.log('y', y)
    yield y
    let s = x + y
    x = y
    y = s
    // [x, y] = [y, (x + y)]
  }
}
function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f
  }
}
let fibonacci_res = fibonacci(20)
console.log('demo2: fibonacci_res', fibonacci_res)

// demo3 - 一个可生成唯一ID的生成器函数
function* idGenerater() {
  let id = 0
  while (true) {
    yield id++
  }
}
let i = idGenerater()
let obj1 = { id: i.next().value, name: 'zf1' }
let obj2 = { id: i.next().value, name: 'zf2' }
let obj3 = { id: i.next().value, name: 'zf3' }
console.log('demo3', obj1, obj2, obj3)

// demo4 - 遍历DOM树
// function* tracerseDom(el) {
//   el = typeof el === 'string' ? document.querySelector(el) : el
//   yield el
//   let ele = el.firstElementChild
//   while (ele) {
//     yield* tracerseDom(ele)
//     ele = ele.nextElementSibling
//   }
// }
// debugger
// for (let d of tracerseDom('#app')) {
//   console.log('demo4,', d)
// }

// demo5 - 生成器和promise相结合
function getData(reqInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reqInfo)
    }, 1000)
  })
}
function async1(generator) {
  let iterator = generator()
  function walk(iteratorResult) {
    if (iteratorResult.done) {
      return iteratorResult.value
    }
    let iteratorResultValue = iteratorResult.value
    if (iteratorResultValue instanceof Promise) {
      iteratorResultValue.then((res) => {
        walk(iterator.next(res))
      }).catch((error) => {
        iterator.throw(error)
      })
    }
  }
  try {
    walk(iterator.next())
  } catch (error) {
    iterator.throw(error)
  }
}
async1(function* () {
  let ret1 = yield getData('我是第一个')
  console.log('demo5', ret1)
  let ret2 = yield getData(`${ret1}+ 我是第二个`)
  console.log('demo5', ret2)
  let ret3 = yield getData(`${ret2}+ 我是第三个`)
  console.log('demo5', ret3)
})
console.log('demo5-同步执行')

