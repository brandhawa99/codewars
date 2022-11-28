/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = [];
  let pre = 1; 
  for(let i = 0 ; i < nums.length; i++){
    res[i] = pre; 
    pre *= nums[i]; 
  }
  pre = 1; 
  for(let i =  nums.length-1 ; i >= 0; i--){
    res[i] *= pre; 
    pre *= nums[i]
  }
  
  return res; 
};
