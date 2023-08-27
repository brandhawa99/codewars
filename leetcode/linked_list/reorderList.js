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

}

const reorder = (l1, l2) => {

}