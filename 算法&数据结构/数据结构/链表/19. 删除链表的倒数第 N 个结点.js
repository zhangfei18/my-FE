
/**
 * 快慢指针：
 *  因为要求倒数第n个节点，那我就先开始一个快指针
 *  走n步， 然后再搞一下慢指针从头开始走，这样当快
 *  指针走到链表末尾的时候，慢指针就走到了倒数第n个
 *  节点
*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(null, head)
  let fast = slow = dummy
  while (n--) {
    fast = fast.next
  }
  while (fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
};

