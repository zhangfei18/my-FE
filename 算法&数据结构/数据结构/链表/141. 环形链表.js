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

// 还可以用快慢指针
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let slow = head
  let fast = head.next
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true
    slow = slow.next
    fast = fast.next.next
  }
  return false
};