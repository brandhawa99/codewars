// 1. Two Sum
/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let couple = target - nums[i];
    if (map.get(couple) != null) {
      return [map.get(couple), i];
    }
    map.set(nums[i], i);
  }
  return;
};
