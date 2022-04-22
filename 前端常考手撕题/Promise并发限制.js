
const promiseScheduler = function (promiseFuns, limit) {
  function run() {
    promiseFuns.shift()().then((res) => {
      console.log(`第${res}张图片打印完成~`)
      promiseFuns.length && run()
    })
  }
  for (let i = 0; i < limit; i++) {
    run()
  }
}

function loadImg(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url)
    }, Math.random() * 10000)
  })
}

function walk(urls) {
  let copyUrls = [...urls]
  let promisfyUrls = copyUrls.map((url) => {
    return function () { return loadImg(url) }
  })
  promiseScheduler(promisfyUrls, 3)
}
walk([1, 2, 3, 4, 5, 6])