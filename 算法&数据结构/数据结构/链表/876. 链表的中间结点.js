

// 链表的中间节点
function middleNode(head) {
  let slow = fast = head
  while (fast && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}