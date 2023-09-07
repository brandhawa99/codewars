/**
 * 
 * @param {ListNode} head 
 * @returns {boolean};
 */
const hasCycle = (head) => {
  let fast = head;
  let slow = head;

  // if loop exists fast pointer will meet with slow pointer at some point 
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
}