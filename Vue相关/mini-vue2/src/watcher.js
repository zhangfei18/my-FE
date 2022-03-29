import Dep from "./dep.js"
export default class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    this.deps = []
    Dep.target = this
    this.oldValue = vm[key] // 触发getter
    Dep.target = null
  }
  update() {
    let newValue = this.vm(this.key)
    if (this.oldValue === newValue) return
    console.log('触发更新')
    this.cb(newValue)
  }
}