

// 三层for循环版-会有重复的，比较难去重
function threeSum(nums) {
  let ret = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          ret.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return ret
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))


/**
 * 循环内不考虑去重, 但是我们可以使用set结构，达到去重的效果，
 * 但是如果我们往set里面push的是数组其实也不会达到去重的效果，
 * 所以我们可以在push的时候将数组变成字符串，比如[1,2,3] => '1,2,3'
*/

function threeSum_2(nums) {
  nums = nums.sort((a, b) => a - b)
  let ret = new Set()
  let left, right;
  for (let i = 0; i < nums.length; i++) {
    left = i + 1
    right = nums.length - 1
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        ret.add(`${nums[left]},${nums[right]},${nums[i]}`)
        right--
        left++
      } else if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      }
    }
  }
  return Array.from(ret).map(function (s) { return s.split(',') })
}
for (let r of threeSum_2([-1, 0, 1, 2, -1, -4])) {
  console.log('threeSum_2:', r)
}

function threeSum_3(nums) {
  nums.sort()
  let ret = []
  let left
  let right
  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      continue
    }
    left = i
    right = len - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        ret.push([nums[i], nums[left], nums[right]])
        left++
        right--
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }
  return ret
}
for (let r of threeSum_3([-1, 0, 1, 2, -1, -4])) {
  console.log('threeSum_3:', r)
}

