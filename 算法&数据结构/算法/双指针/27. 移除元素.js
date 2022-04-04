

/**
 * 暴力解法：
 * 时间复杂度O(n*n)
 * */ 
function removeElement(nums, val) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i + 1; j < len; j++) {
        nums[j - 1] = nums[j]
      }
      nums[len-1] = val
      i--
      len--
    }
  }
  return len
}

// let res = 
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))


/**
 * 双指针法
 * 时间复杂度：O(n)
 * */ 

function removeElement_2(nums, val) {
  let slowI = 0
  for(let fastI = 0; fastI < nums.length; fastI++) {
    if(val !== nums[fastI]) {
      nums[slowI++] = nums[fastI]
    }
  }
  return slowI
}
console.log(removeElement_2([0, 1, 2, 2, 3, 0, 4, 2], 2))