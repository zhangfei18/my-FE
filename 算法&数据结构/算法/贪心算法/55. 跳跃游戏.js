/**
 * 属性： 贪心
 * 第二遍
 * 百度二面
 *  */


var canJump = function (nums) {
  let cover = 0
  for (let index = 0; index <= cover; index++) {
    const element = nums[index];
    cover = Math.max(cover, element + index)
    if (cover >= nums.length - 1) {
      return true
    }
  }
  return false
};