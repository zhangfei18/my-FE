/*
  第一遍
*/

function subsets(nums) {
  let res = []
  function backtrack(path, l, start) {
    if (path.length === l) {
      res.push(path)
      return
    }
    for (let index = start; index < nums.length; index++) {
      const num = nums[index];
      backtrack(path.concat(num), l, index + 1)
    }
  }
  for (let index = 0; index <= nums.length; index++) {
    backtrack([], index, 0)
  }
  return res
}

let res = subsets([1, 2, 3])
console.log('子集：', res)