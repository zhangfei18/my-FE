
// nums = [3,2,2,3], val = 3
// 也是快慢指针, 只不过是快指针用了for循环的小标
function removeElement(nums, val) {
  let slowI = 0
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      nums[slowI++] = nums[index]
    }
  }
  return slowI
}
console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))