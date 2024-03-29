/**
 * Definition for singly-linked list.
 * function ListNode(val,next){
 *    this.val = (val===undefined ? 0 : val)
 *    this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode} 
 */
var reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {

    let temp = curr.next;
    //change direction of pointer
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}