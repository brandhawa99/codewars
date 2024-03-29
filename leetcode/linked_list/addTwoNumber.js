/**
 * @param {ListNode} l1; 
 * @param {ListNode} l2;
 * @returns {ListNode}
 */

const addTwoNumbers = (l1, l2) => {


  let remainder = 0;
  let head = {}
  let curr = head;

  while (l1 || l2 || remainder) {
    let num1 = l1?.val || 0;
    let num2 = l2?.val || 0;

    let sum = num1 + num2 + remainder;

    let val = sum % 10;
    remainder = Math.floor(sum / 10);

    curr.next = { val: val, next: null };
    curr = curr.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;

  }
  return head.next;
}