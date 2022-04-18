var twoSum = function (nums, target) {
  let mp = new Map()
  for (let i = 0; i < nums.length; i++) {
      if(mp.has(target - nums[i])){
          return [mp.get(target - nums[i]), i]
      }
      mp.set(nums[i], i)
  }
};