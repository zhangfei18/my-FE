

// [0,1,0,3,12]
// 快慢指针
function moveZeroes(nums) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast]) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
      slow++
    }
    fast++
  }
  return slow
}