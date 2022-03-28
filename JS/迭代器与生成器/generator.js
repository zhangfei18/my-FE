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
    console.log('y', y)
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