import Oberver from "./observer.js"
import Compiler from "./compiler.js"
/**
 * 构造函数
 * 
*/

export default class Vue {
  constructor(options = {}) {
    this.$options = options
    this.$data = options.data
    this.$methods = options.methods
    this.initRootElement(options)
    this._proxyData(this.$data)
    new Oberver(this.$data)
    new Compiler(this)
  }
  initRootElement({ el }) {
    if (typeof el === 'string') {
      this.$el = document.querySelector(el)
    } else if (el instanceof HTMLElement) {
      this.$el = el
    } else {
      throw new Error('传入的el不合法')
    }
  }
  _proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key]
        },
        set(newVal) {
          if (newVal !== data[key]) {
            data[key] = newVal
          }
        }
      })
    })
  }
}