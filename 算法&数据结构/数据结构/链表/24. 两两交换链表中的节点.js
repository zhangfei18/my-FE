/**
 * 两两交换列表
 */

function swapPairs(head) {
  let dummy = new ListNode(null)
  dummy.next = head
  let temp = head
  while (temp.next && temp.next.next) {
    let node1 = temp.next
    let node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return dummy.next
}