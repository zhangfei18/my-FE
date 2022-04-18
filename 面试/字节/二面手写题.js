// 使用循环实现打平数组
function flat(arr) {
  let ret = []
  let stack = [].concat(arr)
  while (stack.length) {
    let curVal = stack.pop()
    if (Array.isArray(curVal)) {
      stack.push(...curVal)
    } else {
      ret.unshift(curVal)
    }
  }
  return result
}

// 请求并发控制
function request(urls, limit) {
  let len = urls.length
  let result = Array(len).fill(false)
  return new Promise(function(resolve, reject){
    let count = 0
    while(count < limit){
      next(count)
      count++
    }
    function next(count){
      let url = urls[count]
      fetch(url).then(function(res){
        result[count] = res
        if(count < len){
          next(count++)
        }
      })
    }
  })
}
