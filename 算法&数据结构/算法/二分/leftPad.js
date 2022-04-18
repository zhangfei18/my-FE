

function leftPad(str, length, ch) {
  let need = length - str.length + 1
  return Array(need).join(ch) + str
}
console.log('leftPad', leftPad('zf', 8, '0'))

// 没搞懂
function leftPad_2(str, length, ch) {
  let len = length - str.length
  let total = ''
  while (true) {
    if (len % 2 == 1) {
      total += ch
    }
    if (len == 1) {
      return total + str
    }
    ch += ch
    len = parseInt(len / 2)
  }
}
console.log('leftPad_2', leftPad_2('zf', 10, '0'))