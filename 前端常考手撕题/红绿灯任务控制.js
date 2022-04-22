/**
 * 红灯3s亮一次、绿灯2s亮一次、黄灯2s亮一次, 如何让3个灯不断交替重复地亮呢？
 * */

function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

function light(time, cb) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      cb && cb()
      resolve()
    }, time)
  })
}

async function walk() {
  await light(3000, red)
  await light(1000, green)
  await light(2000, yellow)
  walk()
}
walk()