// 不使用模块化思想
// var names = ['周日', '周一', '周二', '周三', '周四','周五','周六']
// function dayName(number){
//   return names[number]
// }
// 命名空间 - 函数IIFE
let dayName = (function () {
  var names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return function (number) {
    return names[number]
  }
})()

// 命名空间 - 对象
let weekDay = (function () {
  var names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return {
    getNameByNumber(number) {
      return names[number]
    },
    getNumberByName(name) {
      return names.indexOf(name)
    }
  }
})()

// exports对象的使用
let exports = {}
  (function (exports) {
    var names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    exports.getNameByNumber = function (number) {
      return names[number]
    }
    exports.getNumberByName = function (name) {
      return names.indexOf(name)
    }
  })(exports)


// require函数
function require(moduleName) {
  require.catch || (require.catch = Object.create(null))
  if (moduleName in require.catch) {
    return require.catch[moduleName]
  }
  let exports = {}
  let module = { exports }
    ; (function (code, exports, module, require) {
      eval(code)
    })(reaFile(moduleName), exports, module, require)
  require.catch[moduleName] = exports
  return exports
}
require(name)