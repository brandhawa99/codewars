const reorderList = (head) => {


}

const findMid = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const reverse = (head) => {
  let [prev, next, curr] = [null, null, head];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;

}

const reorder = (l1, l2) => {

}