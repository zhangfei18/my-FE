
function makeObservable(target) {
  let name = Symbol('handler')
  let observeStore = new Map()
  observeStore.set(name, [])
  target.observe = function (cb) {
    observeStore.get(name).push(cb)
  }

  let p = new Proxy(target, {
    get(target, key) {
      let res = Reflect.get(...arguments)
      observeStore.get(name).forEach(cb => {
        cb('GET', key)
      }) 
      return res
    },
    set(target, key, value) {
      let res = Reflect.set(...arguments)
      observeStore.get(name).forEach(cb => {
        cb('SET', key, value)
      })
      return res
    },
    deleteProperty(target, key) {
      Reflect.deleteProperty(...arguments)
      observeStore.get(name).forEach(cb => {
        cb('DELETE', key)
      })
    }
  })
  return p
}

let user = {}
user = makeObservable(user)

user.observe((action, key, value) => {
  console.log(`${action} key=${key} value=${value || ''}`)
})
user.name = 'zf'
console.log(user.name)
delete user.name