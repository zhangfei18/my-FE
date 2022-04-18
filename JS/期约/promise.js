// 使用
// 期约链
// demo1
function createPromise(res) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(res)
    }, 1000)
  })
}
let p = createPromise('Y')
// 返回非期约值：如下第一个回调
p.then(function (res1) {
  console.log('demo1:res1', res1)
  return res1 // 这个期约会被立即兑现
}).then(function (res2) {
  console.log('demo1:res2', res2)
})
// 返回期约值 - 如下第一个回调
let p1 = createPromise('Y')
p1.then(function (res1) {
  console.log('demo1:p1:res1', res1)
  return createPromise('E') // 返回的期约需要等这个期约兑现后才会兑现
}).then(function (res2) {
  console.log('demo1:p1:res2', res2)
})
// 期约链的一个错误写法 - 下面这种写法在第二个链的回调里面是拿不到上一个对调返回的值的, 只能拿到期约的出初始值
let p2 = createPromise('S')
p2.then(function (res1) { console.log('demo1:p2:res1', res1); return res1 + 'W' })
p2.then(function (res2) {
  console.log('demo1:p2:res2', res2);
  return res2
})
// 错误处理：一种惯例是使用.catch的回调来处理这些异步的错误
// finally：一种类似try/catch/finally 的语法 , 适合做一些清理工作
/* catch的开发技巧
  适用： 如果我们的期约链中的某一环因错误发生了失败，但是这个错误属于某种可恢复的错误，那么我们不应该停止后面的期约链的执行，
  此时我们可以在这then后面添加一个catch函数去捕获错误，避免后面的期约链不会继续执行
*/
// demo3
let p4 = createPromise('A')
p4.then(function (res1) {
  console.log('demo3:res1', res1)
  throw new Error('我是可恢复的错误')
}).catch(function (err) {
  console.log('demo3:发生了错误', err)
}).then(function (res2) {
  console.log('demo3:res2', res2)
})

// 并行期约 - all allSettled race
// 创建期约 - 基于其他期约的期约
// 创建期约 - 基于其他期约的期约
// 创建期约 - 从头开始创建的期约
/* 串行期约
  适用： 适用于编写不知道期约链长度的期约链， 如下面的例子
*/  
// demo4
let urls = ['s1', 's2', 's3'] // 假设urls是一个不知道其确定长度的数组
// 第一种方法：多米诺骨牌
let p5 = Promise.resolve(undefined)
while(urls.length){
  p5 = p5.then(()=>{
    return fetch(urls.shift())
  })
}
// 第二种方式：俄罗斯套娃
function promiseSequence(inputs, promiseMaker){
  inputs = [...inputs]
  function handleNextInput(outputs){
    if(inputs.length === 0){
      return outputs
    }else {
      let nextInput = inputs.shift()
      return promiseMaker(nextInput).then(output => outputs.concat(output)).then(handleNextInput)
    }
  }
  return Promise.resolve([]).then(handleNextInput)
}