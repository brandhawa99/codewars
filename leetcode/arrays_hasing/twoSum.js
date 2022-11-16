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
  // create a map to hold the values that are needed to added up to the target
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //figure out what value is need to add up to the target
    let couple = target - nums[i];
    //check if that value exists in the map
    if (map.get(couple) != null) {
      //if it does get its index and the current index
      return [map.get(couple), i];
    }
    //if the couple is not in the map add the current value to the map
    map.set(nums[i], i);
  }
  return;
};
