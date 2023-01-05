/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     let [start, end] = [0 , nums.length -1]; 
     let min = Infinity

     while(start < end){
        let mid  = Math.floor((start+end)/2)
        min = Math.min(min, nums[mid]); 
        if(nums[mid] > nums[end]){
            start = mid + 1; 
        }else{
            end = mid -1; 
        }
     }
     return Math.min(min,nums[start])
    
};
