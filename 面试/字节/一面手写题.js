// 第一题： 数组转成树结构
let list = [
  { father: null, id: 1 },
  { father: 1, id: 2 },
  { father: 1, id: 3 },
  { father: 2, id: 4 },
  { father: null, id: 5 }
]

function trans(list) {
  let root = {}
  let ret = []
  for (let l of list) {
    if (!l.father) {
      Array.isArray(root.children) ? root.children.push(l) : root.children = [l]
    } else {
      dfs(root, l)
    }
  }
  function dfs(root, child) {
    if (!root) return root
    if (root.id === child.father) {
      Array.isArray(root.children) ? root.children.push(child) : root.children = [child]
    } else {
      root.children && root.children.forEach(c => {
        dfs(c, child)
      });
    }
  }

  return root.children
}
trans(list)
// 数组
// [{dep: [], id: 1, export(){return 1 }}, {dep: [1], id: 2, export(){return step1 + 3 }}]

// 第二题 - 数组拍平
let arr = [1, [2, 3, [4, 5]], 6]
function myFlat(nums) {
  let ret = []
  for (var i = 0, len = nums.length; i < len; i++) {
    let num = nums[i]
    if (Array.isArray(num)) {
      ret = ret.concat(myFlat(num))
    } else {
      ret.push(num)
    }
  }
  return ret
}
console.log(myFlat(arr))

// 数组拍平迭代法
const myFlatIterator = function (nums) {
  let stack = [].concat(nums)
  let ret = []
  while (stack.length) {
    let cur = stack.pop()
    if (Array.isArray(cur)) {
      stack.push(...cur)
    } else {
      ret.unshift(cur)
    }
  }
  return ret
}
console.log(myFlatIterator(arr))