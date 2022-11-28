/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = [1];
  let pre = 1; 
  for(let i = 1 ; i < nums.length; i++){
    res[i] = nums[i-1]*pre; 
    pre *= nums[i-1]; 
  }
  pre = 1; 
  for(let i =  nums.length-1 ; i >= 0; i--){
    res[i] *= pre; 
    pre *= nums[i]
  }
  
  return res; 
};
