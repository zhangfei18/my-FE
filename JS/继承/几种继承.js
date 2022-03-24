function Shape() { }
Shape.prototype.name = 'shape'
Shape.prototype.toString = function () {
  var result = []
  if (this.constructor.uber) {
    result[result.length] = this.constructor.uber.toString()
  }
  result[result.length] = this.name
  return result.join(', ')
}

function TwoDshape() { }
var F = function () { }
F.prototype = Shape.prototype
TwoDshape.prototype = new F()
TwoDshape.prototype.constructor = TwoDshape
TwoDshape.uber = Shape.prototype
TwoDshape.prototype.name = '2D shape'

function Triangle(side, height) {
  this.side
  this.height = height
}
var F = function () { }
F.prototype = Shape.prototype
Triangle.prototype = new F()
Triangle.prototype.constructor = Triangle
Triangle.uber = TwoDshape.prototype
Triangle.prototype.name = 'Triangle'

let my = new Triangle(5, 10)
debugger
let ret = my.toString()
console.dir(my.toString())

// 其实继承目的就是为了让我们在创建一个对象的时候可以免费的继承其他对象的一些属性和方法 (功能)
// 1、最简单的： 混入mixins 也就是对象之间的’继承‘
function mixins(a, b, c) {
  let len = arguments.length
  let mid = null
  let ret = {}
  for (let i = 0; i < len; i++) {
    mid = arguments[i]
    for (let v in mid) {
      ret[v] = mid[v]
    }
  }
}

// 2、原型继承
function A(){}
A.prototype = {name: 'zf'}
function B(){}
B.prototype = A.prototype
function C(){}
C.prototype = A.prototype

// 3、原型链继承
function A(){}
function B(){}
B.prototype = new A()

// 2、原型链继承-高级
function A(){}
function B(){}
// 中间函数
function F(){}
F.prototype = A.prototype
let f = new F() 
B.prototype = f

// 3、构造器借用
function A(){}
function B(){
  A.apply(this, arguments)
}

// 个人经常使用的一种继承
function A(){}
function B(){}

B.prototype = Object.create(A.prototype)
B.prototype.constructor = B

