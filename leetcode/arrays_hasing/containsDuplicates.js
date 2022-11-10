/**
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

var containsDuplicate = function (nums) {
  // set is a data structure that does't hold duplicates
  let set = new Set();
  //go through the nums array
  for (let num of nums) {
    // if the num in the array is also in the set return false;
    if (set.has(num)) {
      return true;
    }
    // if it is not in the set add it to the est
    set.add(num);
  }
  // return flase since it didn't have any duplicates
  return false;
};
