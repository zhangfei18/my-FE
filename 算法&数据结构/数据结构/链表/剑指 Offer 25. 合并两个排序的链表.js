var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(null)
  let temp = dummy
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      temp.next = list1
      list1 = list1.next
    } else {
      temp.next = list2
      list2 = list2.next
    }
    temp = temp.next
  }
  temp.next = list1 === null ? list2 : list1
  return dummy.next
};