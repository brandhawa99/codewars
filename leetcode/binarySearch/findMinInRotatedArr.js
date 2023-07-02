/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    let l = 0;
    let r = nums.length - 1;
    let min = Infinity;

    while (l <= r) {
        // if left val is less than the right val we have found the minimum value 
        if (nums[l] <= nums[r]) {
            min = nums[l];
            break;
        }
        let mid = l + Math.floor((r - l) / 2);
        min = Math.min(nums[mid], min);
        // if the left val is less than the mid val the numbers left of mid do not include the minimum value 
        if (nums[l] <= nums[mid]) {
            l = mid + 1
        } else {
            r = mid - 1;
        }
    }

    return min
};
