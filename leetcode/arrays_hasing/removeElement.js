/**
 * Q: 27. Remove Element 
 * Dif: Easy 
 */

/**
 * @param {number[]} nums 
 * @param {number} val 
 * @returns {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums[i] = nums[nums.length - 1];
      nums.pop();
      continue
    }
    i++;
  }
  return nums.length
}