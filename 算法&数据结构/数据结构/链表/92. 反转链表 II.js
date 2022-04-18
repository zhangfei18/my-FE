
/**
 * 思路：
 *  先让链表走到left的位置
 *  开始反转, 
 *  到right位置反转停止
 *  最后改下反转后的部分的指针
 */
//  [1,2,3,4,5] left = 2, right = 4
var reverseBetween = function (head, left, right) {
  let dummy = {
    next: head
  }
  let temp = dummy
  // 走到left的前一个节点
  for (let i = 1; i <= left - 1; i++) {
    temp = temp.next 
  }
  // 让prev等于left节点
  let prev = temp.next
  // 初始化cur, 用于链表反转
  let cur = prev.next
  // 开始反转链表
  for (let j = 1; j <= (right - left); j++) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  // temp保持在了要反转部分的前一个节点的位置
  temp.next.next = cur
  temp.next = prev
  return dummy.next
}