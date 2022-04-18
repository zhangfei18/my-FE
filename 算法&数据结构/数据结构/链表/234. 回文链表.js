

// 1 2 3 2 1 就是一个回文链表 
var isPalindrome = function (head) {
  let slow = head
  let fast = head
  let prev
  while (fast && fast.next) {
    fast = fast.next.next
    // 开始反转链表
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }
  if (fast) {
    slow = slow.next
  }
  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
};