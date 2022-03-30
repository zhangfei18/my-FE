function protoAugment(value, src) {
  value.__proto__ = src
}
let arrayProto = Array.prototype
let arrayMethods = Object.create(arrayProto)
(['push', 'pop', 'shift', 'unshift', 'slice', 'splice', 'reverse']).forEach(method => {
  arrayMethods[method] = function () {
    let origin = arrayProto[method]
    let result = origin.call(this, ...arguments)
    notify()
    return result
  }
})
function notify() {
  console.log('notify')
}
const reactive = function (data) {
  protoAugment(data, arrayMethods)
}

const data = [1, 2, 3, 4, 5]
reactive(data)    
data.push(5)
data.splice(0, 2)