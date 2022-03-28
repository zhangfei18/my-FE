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
      if (path.includes(num)) return;
      backtrack(path.concat(num))
    });
  }
  backtrack([])
  return res
}
let res = permute([1, 2, 3])
console.log('全排列:', res)