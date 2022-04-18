// 一道阿里的面试题
let a = 0
let b = 0
function A(a) {
  A = function (b) {
    alert(a + b++)
  }
  alert(a++)
}
A(1)
A(2)
