/**
 * Leet code questions #
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
//   sort the array so that we have some sense of a sequence
  nums.sort((a,b) => a-b);  
//   hold the current largest sequence  and the longest sequence
  let max_len = 0; 
  let curr_len = 0; 
//   loop through the array
  for(let i = 0 ; i < nums.length; i++){
//     if we are the a 0th index increment curr_len and continue becasue there is currently nothing to compare 
    if(i == 0){
      curr_len++
      continue; 
    }
//     if the current number and the previous one are the same just continue because we already have the current number in the curr_len
    if(nums[i] - nums[i-1] ==0) {
      continue; 
    }
//     if the current number is not in sequence to the prev number
    if(nums[i] - nums[i-1]  != 1){
//       figure out what value is bigger curr_len or max_len
      max_len = Math.max(max_len, curr_len)
//       set curr len to 0
      curr_len = 0 
    }
//     increment curr len by one so that we can start keeping track at the current index
    curr_len++; 
  }
//   return the larger val
   return Math.max(curr_len, max_len); 
};
