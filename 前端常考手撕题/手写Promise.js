function MyPromsie(execute) {
  this.status = 'pending'
  this.resoveFns = []
  this.rejectFns = []
  const resolve = (value) => {
    if (this.status !== 'pending') return
    this.status = 'resolved'
    setTimeout(() => {
      this.resoveFns.forEach(fn => {
        fn(value)
      });
    })
  }
  const reject = (errorMsg) => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    setTimeout(() => {
      this.rejectFns.forEach(fn => {
        fn(errorMsg)
      });
    })
  }
  try {
    execute(resolve, reject)
  } catch (error) {
    reject(error)
  }
}
MyPromsie.prototype.then = function (resolveCb, rejectCb) {
  resolveCb || (resolveCb = function resolveCb() { })
  rejectCb || (rejectCb = function rejectCb() { })
  return new MyPromsie((resolve, reject) => {
    this.resoveFns.push(function (value) {
      try {
        let ret = resolveCb(value)
        // ret.then(resolve, reject): 目的是为了让用户的promise状态改变后再改变我们内部返回的这个promise
        ret instanceof MyPromsie ? ret.then(resolve, reject) : resolve(ret)
      } catch (error) {
        reject(error)
      }
    })
    this.rejectFns.push(function (errorMsg) {
      try {
        let ret = rejectCb(errorMsg)
        ret instanceof MyPromsie ? ret.then(resolve, reject) : reject(ret)
      } catch (error) {
        reject(error)
      }
    })
  })
}
MyPromsie.prototype.catch = function (failFn) {
  this.then(null, failFn)
}

// Use
let p = new MyPromsie(function (resolve, reject) {
  // resolve(1111)
  reject('我发生错误了~')
})
p.then(function (res) {
  console.log('MyPromsie返回结果', res)
}, function (errorMsg) {
  console.log('MyPromsie返回错误', errorMsg)
})

MyPromsie.resolve = function (val) {
  if (val instanceof MyPromsie) {
    return val
  } else {
    return new MyPromsie(function (resolve, reject) {
      resolve(val)
    })
  }
}
// .all
MyPromsie.all = function (promises) {
  promises = promises.map((p) => {
    if (!p instanceof MyPromsie) {
      return MyPromsie.resolve(p)
    } else {
      return p
    }
  })
  let count = 0
  let outputs = []
  return new MyPromsie(function (resolve, reject) {
    for (let index = 0; index < promises.length; index++) {
      promises[index].then(function (res) {
        count++
        outputs[index] = res
        if (count >= promises.length) {
          resolve(outputs)
        }
      }).catch(function (err) {
        reject(err)
      })
    }
  })
}

MyPromsie.allSettled = function (promises) {
  promises = promises.map((p) => {
    if (!p instanceof MyPromsie) {
      return MyPromsie.resolve(p)
    } else {
      return p
    }
  })
  let count = 0
  let outputs = []
  return new MyPromsie(function (resolve, reject) {
    for (let index = 0; index < promises.length; index++) {
      promises[index].then(function (res) {
        count++
        outputs[index] = { status: 'fulfilled', value: res }
        if (count >= promises.length) {
          resolve(outputs)
        }
      }).catch(function (err) {
        count++
        if (count >= promises.length) {
          outputs[outputs] = { status: 'rejected', reason: err.reason }
        }
      })
    }
  })
}

function createPromise(V) {
  return new MyPromsie(function (resolve, reject) {
    setTimeout(function () {
      resolve(V)
    }, 1000)
  })
}
let ps = [createPromise('A'), createPromise('B'), createPromise('C')]
MyPromsie.all(ps).then(function (res) {
  console.log('MyPromsie.all:', res)
})
