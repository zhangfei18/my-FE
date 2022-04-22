

// 1 2 3 2 1 就是一个回文链表 
var isPalindrome = function (head) {
  let fast = head
  let slow = head
  let prev
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    // 反转
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }
  // 链表个数是奇数 比如 1 -> 2 -> 3 -> 2 -> 1
  if (fast) { // 此时slow指向3节点, 那我们需要将其指向下一个节点, 即2
    slow = slow.next
  }
  // 开始从中间往两头遍历
  while (prev !== null && slow !== null) {
    if (prev.val !== slow.val) {
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
};