
/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * 解题思路： 
 *  1. 统计元素的出现的频率 - map O(n)
 *  2. 对频率进行排序 - 优化算法：优先队列(小顶堆) 无优化算法：Array.from(map).sort((a,b) => a[1] - b[1])
 *  3. 输出前k个
 * 
 *  知识点： 优先级队列 堆 大顶堆 小顶堆
 *  
 */

class MinHeap {
  constructor() {
    this.heap = []
  }
  getParent(index) {
    return Math.floor((index - 1) / 2)
  }
  swip(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
  }
  // 上浮
  shiftUp(index) {
    if (index === 0) return
    let parent = this.getParent(index)
    if (this.heap[parent] !== undefined && this.heap[parent].value > this.heap[index].value) {
      this.swip(parent, index)
    }
    this.shiftUp(parent)
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  getLeftChild(index) {
    return index * 2 + 1
  }
  getRightChild(index) {
    return index * 2 + 2
  }
  // 下沉
  shiftDown(index) {
    if (index === this.heap.length - 1) return
    let left = this.getLeftChild(index)
    let right = this.getRightChild(index)
    if ((this.heap[left] !== undefined) && this.heap[index].value > this.heap[left].value) {
      this.swip(index, left)
      this.shiftDown(left)
      return
    }
    if ((this.heap[right] !== undefined) && this.heap[index].value > this.heap[right].value) {
      this.swip(index, right)
      this.shiftDown(right)
      return
    }
  }
  // 去除堆顶元素
  pop() {
    // 1. 我们把堆的最后一个元素放到堆顶， 这样即达到了删除堆顶元素的目的，
    // 也达到了为后面由于删除了堆顶的元素要重新排序行为的目的
    let head = this.heap[0]
    this.heap[0] = this.heap.pop()
    // 2. 向下排序
    this.shiftDown(0)
    return head
  }
  size() {
    return this.heap.length
  }
  peek() {
    return this.heap[0]
  }
}

// let mp = new MinHeap()
// mp.insert(3)
// mp.insert(2)
// mp.insert(1)
// mp.insert(0)
// mp.pop()

function topKFrequent(nums, k) {
  let map = new Map()
  let mp = new MinHeap()
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (let [key, value] of map.entries()) {
    mp.insert({ key, value })
    if (mp.size() > k) {
      mp.pop()
    }
  }
  let ret = []
  ret = mp.heap.map(h => {
    return h.key
  })
  return ret
}
topKFrequent([1,1,1,2,2,3], 2)