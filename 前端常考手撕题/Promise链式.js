// promise的生成器
const promiseFuncGenerator = (num) => new Array(num).fill(0)
  .map((_, index) => {
    return function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(index)
          resolve(index)
        }, Math.random() * 1000)
      })
    }
  })

const PromiseChain = function (proFunAll) {
  proFunAll.reduce(function (total, item) {
    return total.then(() => {
      return item()
    })
  }, Promise.resolve(-1))
}
let proFunAll = promiseFuncGenerator(6)
PromiseChain(proFunAll)