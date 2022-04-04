/**
 * 可以有两种实现思路：
 *  1. 在添加新元素的时候做手脚， 因为栈和队列的出去顺序是相反的，所以我们可以在
 *     每次添加新元素的时候就将日后要出队顺序排好， 也就是每次新添加一个元素的时候
 *     我们现将栈中已有的元素全部推出，把要新添加的元素放入栈的最底部，然后再把刚才推出去的元素
 *     顺序放回来，这样我们始终维持着栈顶的元素是下一个要出队的元素
 *  2. 我们在推出元素的时候做手脚， 首先我们准备两个栈(一个输入栈一个输出栈)，
 *     就是每当要推出元素的时候，我们判断输出栈是否为空，如果是空那我们就将输入栈中
 *     的元素反序放入到输出栈中，然后推出栈顶的元素; 如果不为空，那我们直接推出栈顶的元素即可.
 */
var MyQueue = function () {
  this.list = []
  this.bufferList = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.list.length) {
    this.bufferList.push(this.list.pop())
  }
  this.list.push(x)
  while (this.bufferList.length) {
    this.list.push(this.bufferList.pop())
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.list.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.list[this.list.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !this.list.length
};

var obj = new MyQueue()
obj.push('x')
obj.push('y')
obj.push('z')
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()