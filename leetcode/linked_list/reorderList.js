/**
 * @param {ListNode} head 
 */
const reorderList = (head) => {
  let mid = findMid(head);
  let rev = reverse(mid);
  reorder(head, rev);
  return head;
}

/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */
const findMid = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */
const reverse = (head) => {
  let [prev, next, curr] = [null, null, head]

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

/**
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
const reorder = (l1, l2) => {

  let [first, second, temp] = [l1, l2, null];
  while (second.next) {
    temp = first.next;
    first.next = second;
    first = temp;

    temp = second.next;
    second.next = first;
    second = temp;

  }

}

let val = {
  val: 1, next: {
    val: 2, next: {
      val: 3, next: {
        val: 4, next: null
      }
    }
  }
}

console.log(reorderList(val));