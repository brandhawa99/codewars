/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let l = 0;
    let r = nums.length - 1;

    // l <= r because if there is only one item in array it call still solve 
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)
        let midVal = nums[mid];

        if (target > midVal) {
            l = mid + 1;
        } else if (target < midVal) {
            r = mid - 1
        } else {
            return mid;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))