
function promiseAll(array) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(array)) {
      reject(new Error('not work'))
    }
    let resultArr = new Array(array.length)
    let count = 0
    for (let i = 0; i < array.length; i++) {
      Promise.resolve(array[i]).then(res => {
        count++
        resultArr[i] = res
        if (count === array.length) resolve(resultArr)
      }).catch(error => reject(error))
    }
  })
}

// promise的生成器
const promiseGenerator = (num) => new Array(num).fill(0)
  .map((_, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // console.log(index)
        resolve(index)
      }, Math.random() * 1000)
    })
  })

const proAll = promiseGenerator(6)
console.log(proAll)
promiseAll(proAll).then(res => {
  console.log(res)
})