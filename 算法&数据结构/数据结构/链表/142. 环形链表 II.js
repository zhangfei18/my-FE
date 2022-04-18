


var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast !== null) {
    if (fast.next !== null) {
      fast = fast.next.next
    } else {
      return null
    }
    slow = slow.next
    // 相遇
    if (slow === fast) {
      // 初始化一个指针从头开始走
      let cur = head
      while (cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }

  return null
}