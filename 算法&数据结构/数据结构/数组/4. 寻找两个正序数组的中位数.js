/**
 * 百度二面
 * */

var findMedianSortedArrays = function (nums1, nums2) {
  let allLen = nums1.length + nums2.length

  let point1 = 0
  let point2 = 0
  let left = -1
  let right = -1
  for (let i = 0; i <= allLen / 2; i++) {
    left = right
    if (point1 < nums1.length && (nums1[point1] <= nums2[point2] || point2 >= nums2.length)) {
      right = nums1[point1]
      point1++
    } else {
      right = nums2[point2]
      point2++
    }
  }
  if (allLen % 2 === 0) {
    return (left + right) / 2
  } else {
    return right
  }
};

