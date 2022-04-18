/**第一遍 */

// [1,1,2]
var removeDuplicates = function (nums) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
