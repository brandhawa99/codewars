

/**
 * 
 * @param {number[]} nums 
 * @returns{number[][]} 
 */
var threeSum = function (nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    let a = nums[i];

    while (l < r) {
      let sum = a + nums[l] + nums[r]
      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([a, nums[l], nums[r]])
        l += 1
        //make sure the second element isn't repeated
        while (nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return res
}


console.log(threeSum([0, 0, 0, 0]))