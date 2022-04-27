

function nextGreaterElements(nums) {
  let stack = []
  let ret = Array.from(nums).fill(-1)
  for (let i = 0; i < nums.length * 2; i++) {
    let cur = i % nums.length
    while(stack.length && nums[cur] > nums[stack[stack.length - 1]]){
      let index = stack.pop()
      ret[index] = nums[cur]
    }
    stack.push(cur)
  }
  return ret
}