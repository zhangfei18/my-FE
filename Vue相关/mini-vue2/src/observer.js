import Dep from "./dep.js"

/**
 * 递归遍历数据进行响应式
 * */
export default class Oberver {
  constructor(data) {
    this.traverse(data)
  }
  traverse(data) {
    if (!data || typeof data !== 'object') {
      return
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(obj, key, val) {
    this.traverse(val) // 递归遍历
    let dep = new Dep()
    let that = this
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal
          that.traverse(newVal)
          dep.notify()
        }
      }
    })
  }
}
