const sortArrayByParity = (nums) => {

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    while (nums[l] % 2 == 0 && l < r) {
      l++
    }
    while (nums[r] % 2 == 1 && l < r) {
      r--
    }

    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
  }
  return nums;
}