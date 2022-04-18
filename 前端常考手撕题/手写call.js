Function.prototype.myCall = function (context, ...parmas) {
  // 对于context的类型处理
  context == null ? context = window : null
  if (!/^(object|function)$/i.test(typeof context)) {
    context = Object(context) // 直接变为自己所属类的引用类型
  }
  // 使用唯一值避免属性冲突
  let key = Symbol('KEY')
  context[key] = this
  let ret = context[key](...parmas)
  delete context[key]
  return ret
}

let obj = { name: 'zf' }
function fn() {
  console.log(this.name)
}
fn.myCall(obj)