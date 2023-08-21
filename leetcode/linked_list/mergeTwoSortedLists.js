/**
 * function ListNode(val, next){
 *  this.val = (val === undefined ? 0 : val);
 *  this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function (list1, list2) {
  //pointer for start of the list
  let head = { val: null, next: null }
  //pointer for end of list
  let curr = head;


  while (list1, list2) {
    if (list1.val < list2.val) {
      curr.next = { val: list1.val, next: null }
      list1 = list1.next;
    } else {
      curr.next = { val: list2.val, next: null }
      list2 = list2.next;
    }
    curr = curr.next;
  }

  // add finished list to end of curr
  curr.next = (list1 || list2);

  return head.next;
}