/**
 * Leet code questions #
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;
  for (let num of nums) {
    if (set.has(num - 1)) {
      continue;
    }
    let currLongest = 1;
    let curr = num;
    while (set.has(curr + 1)) {
      currLongest++;
      curr++;
    }
    longest = Math.max(longest, currLongest);
  }
  return longest;
};
