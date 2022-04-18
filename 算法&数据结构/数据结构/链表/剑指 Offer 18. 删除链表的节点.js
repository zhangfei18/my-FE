
function deleteNode(head, val) {
  // 使用ele放在head头节点前面是因为怕head和要删除的目标值相等
  // 所以head也可能被删除，所以使用ele做个牵引
  let ele = {
    next: head
  }
  // 使用p是因为最后要返回头结点，所以我们让p当做一个指针去遍历完整个
  // 链表， 而不是使用ele去
  let p = ele
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return ele.next
}

function deleteNode(head, val) {
  if (head === null) return head
  head.next = deleteNode(head.next, val)
  return head.val === val ? head.next : head
}