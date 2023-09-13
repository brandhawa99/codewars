

const removNthNodeFromEnd = (head, n) => {

  const sentinel = new NodeList();
  sentinel.next = head;

  const fast = moveFast(sentinel, n);
  const slow = moveSlow(fast, sentinel);

  slow.next = slow.next.next || null;

  return sentinel.next;

}


const moveFast = (fast, n) => {

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  return fast;
}

const moveSlow = (fast, slow) => {
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}