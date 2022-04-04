
// 时间复杂度为O(n*k)版本, 该解法跑AC会报超出时间限制的错误
var maxSlidingWindow = function (nums, k) {
  let queue = []
  let max = 0
  let slow = 0
  let fast = k - 1
  while (fast < nums.length) {
    queue.length = 0
    for (let i = slow; i <= fast; i++) {
      queue.push(nums[i])
    }
    max = Math.max(max, Math.max.apply(null, queue))
    slow++
    fast++
  }
  return max
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))


let maxSlidingWindow_2 = function (nums, k) {
  let ret = []
  class MonoQueue {
    constructor() {
      this.queue = []
    }
    enqueue(value) {
      let back = this.queue[this.queue.length - 1]
      while (back !== undefined && back < value) {
        this.queue.pop()
        back = this.queue[this.queue.length - 1]
      }
      this.queue.push(value)
    }
    dequeue(value) {
      if (value === this.front()) {
        this.queue.shift()
      }
    }
    front() {
      return this.queue[0]
    }
  }
  let monoqueue = new MonoQueue()
  let slow = 0
  let fast = 0
  while (fast < k) {
    monoqueue.enqueue(nums[fast])
    fast++
  }
  ret.push(monoqueue.front())
  while (fast < nums.length) {
    monoqueue.enqueue(nums[fast])
    monoqueue.dequeue(nums[slow])
    ret.push(monoqueue.front())
    slow++
    fast++
  }
  return ret
}
console.log(maxSlidingWindow_2([1, 3, -1, -3, 5, 3, 6, 7], 3))