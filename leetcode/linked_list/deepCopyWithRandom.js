

const deepCopy = (head) => {

  const map = new Map();
  map.set(null, null);

  let curr = head;
  while (curr) {
    map.set(curr, { val: curr.val })
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    let copy = map.get(curr);
    copy.next = map.get(curr.next);
    copy.random = map.get(curr.random);

    curr = curr.next;
  }

  return map.get(head);

}