

var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null
  }
  return traverse(nums)
  function traverse(nums) {
    if (nums.length === 0) {
      return null
    }
    let max = Math.max(...nums)
    let root = new TreeNode(max)
    // 找到下标
    let index = nums.indexOf(max)
    // 切割数组
    let leftNums = nums.slice(0, index)
    let rightNums = nums.slice(index + 1)
    root.left = traverse(leftNums)
    root.right = traverse(rightNums)
    return root
  }
};