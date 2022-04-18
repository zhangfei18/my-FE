/*
  第一遍
*/
function permute(nums) {
  let res = []
  function backtrack(path) {
    if (path.length === nums.length) {
      res.push(path)
      return
    }
    nums.forEach(num => {
      if (path.includes(num)) return; // 注意： forEach内部reture是结束当前循环, 进入下一轮循环
      backtrack(path.concat(num)) // 使用concat就不用像permute_2中的使用pop方法回退了. 因为这个
    });
  }
  backtrack([])
  return res
}
let res = permute([1, 2, 3])
console.log('全排列:', ...res)

function permute_2(nums) {
  let ret = []
  function backtrack(path) {
    if (path.length === nums.length) {
      ret.push(path)
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(num)) continue
      path.push(num)
      backtrack(path)
      path.pop()
    }
  }
  backtrack([])
  return ret
}