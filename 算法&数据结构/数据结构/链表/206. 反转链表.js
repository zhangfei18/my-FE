


function reverseList(head) {
  let prev = null
  let cur = head
  while (cur) {
    // 把当前指针的下一个节点暂存起来
    let next = cur.next
    // 让当前指针的next之前上一个节点
    cur.next = prev
    // 更新上一个节点
    prev = cur
    // 更新当前节点
    cur = next
  }
  return prev
}