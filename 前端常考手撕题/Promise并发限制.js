
const promiseScheduler = function (promiseFuns, limit) {
  function run() {
    promiseFuns.shift()().then((res) => {
      promiseFuns.length && run()
    })
  }
  for (let i = 0; i < limit; i++) {
    run()
  }
}