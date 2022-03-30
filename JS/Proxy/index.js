// demo1 基础使用
// 处理器对象是空对象
let t = { x: 1, y: 2 }
let p = new Proxy(t, {})
console.log('demo1', p.x)
delete p.y
console.log('demo1', t.y)
p.z = 3
console.log('demo1', t.z)

// demo2 处理器对象非空
let my = {}
let identity = new Proxy(my, {
  get(o, name, target) {
    // console.log(my === o) true
    // console.log(target === identity) true
    console.log('demo2', ...arguments)
    return name
  },
  set(o, name, value, target) {
    console.log('demo2', ...arguments)
    return false
  },
  deleteProperty(o, name) {
    console.log('demo2', ...arguments)
  }
})
console.log('demo2', identity.name)
identity.age = 23
delete identity.age
