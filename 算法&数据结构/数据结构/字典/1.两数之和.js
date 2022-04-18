

// 借助映射表存储每个元素及下标
function twoSum(nums, target) {
  let mp = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let need = target - num
    if (mp.has(need)) {
      return [mp.get(need), i]
    }
    // 存储当前元素到映射表
    mp.set(num, i)
  }
}

// 借助映射表存储每个元素和target的差，也就是这个元素需要的目标数
function twoSum(nums, target) {
  let mp = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let need = target - num
    if (mp.has(num)) {
      return [mp.get(num), i]
    }
    mp.set(need, i)
  }
}