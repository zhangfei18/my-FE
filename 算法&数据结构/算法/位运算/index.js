

function print(num) {
  let ret = ''
  for (let i = 31; i >= 0; i--) {
    let cur = ((num & (1 << i)) === 0) ? '0' : '1'
    ret += cur
  }
  console.log(ret)
}
print(1)