

function nextGreaterElement(nums1, nums2) {
  let mp = new Map()
  let ret = Array.from(nums1).fill(-1)
  let stack = []
  for (let i = 0; i < nums1.length; i++) {
    mp.set(nums1[i], i)
  }
  for (let j = 0; j < nums2.length; j++) {
    while (stack.length && nums2[j] > nums2[stack[stack.length - 1]]) {
      // console.log(mp.has(nums2[stack[stack.length - 1]]))
      if (mp.has(nums2[stack[stack.length - 1]])) {
        ret[mp.get(nums2[stack[stack.length - 1]])] = nums2[j]
      }
      stack.pop()
    }
    stack.push(j)
  }
  return ret
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2]))