// 借助一个额外的集合
function hasCycle(head) {
  let set = new Set()
  let p = head
  while (p) {
    if (set.has(p)) {
      return true
    } else {
      set.add(p)
    }
    p = p.next
  }
  return false
}