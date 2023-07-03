/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function (nums, target) {

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (target === nums[mid]) {
      return mid;
    }

    //check left sorted portion
    if (nums[l] <= nums[mid]) {
      if (target < nums[l] || target > nums[mid]) {
        l = mid + 1
      } else {
        r = mid - 1;
      }
    } else {
      if (target > nums[r] || target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1
      }
    }
  }

  return -1
}


// target = 5
// [5,1,3]; 

