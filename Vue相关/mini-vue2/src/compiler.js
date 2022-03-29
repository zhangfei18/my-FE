import Watcher from "./watcher.js";
export default class Compiler {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.methods = vm.$methods
    this.compile(this.el)
  }
  compile(el) {
    let childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 节点类型
      if (this.isTextNode(node)) {
        // 文本
        this.compileText(node)

      } else if (this.isElementNode(node)) {
        // 元素
        this.compileEle(node)
      }

      // 注释
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  compileText(node) {
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
      new Watcher(this.vm, key, (newVal) => {
        node.textContent = newVal
      })
    }
  }
  compileEle(node) {
    if (node.attributes.length) {
      Array.from(node.attributes).forEach(attr => {
        let attrName = attr.name
        if (this.idDirective(attrName)) {
          let directiveName = attrName.indexOf(':') > -1 ? attrName.substring(5) : attrName.substring(2)
          let key = attr.value
          this.update(node, key, directiveName)
        }
      })
    }
  }
  update(node, key, directiveName) {
    let updateFn = this[directiveName + 'Updater']
    updateFn && updateFn.call(this, node, this.vm[key], key, directiveName)
  }
  textUpdater(node, value, key) {
    node.textContent = value
    new Watcher(this.vm, key, (newVal) => {
      node.textContent = newVal
    })
  }
  modelUpdater(node, value, key) {
    node.value = value
    new Watcher(this.vm, key, (newVal) => {
      node.value = newVal
    })
    node.addEventListener('input', () => {
      this.vm[key] = node.value
    })
  }
  htmlUpdater(node, value, key) {
    node.innerHTML = value
    new Watcher(this.vm, key, (newVal) => {
      node.innerHTML = newVal
    })
  }
  clickUpdater(node, value, key, directiveName) {
    node.addEventListener(directiveName, () => {
      this.methods[key].call(this.vm)
    })
  }
  /** 判断是否是文本节点 */
  isTextNode(node) {
    return node.nodeType === 3
  }
  /** 判断是否是元素节点 */
  isElementNode(node) {
    return node.nodeType === 1
  }
  /** 判断是否是指令 */
  idDirective(attrName) {
    return /^v-/.test(attrName)
  }
}