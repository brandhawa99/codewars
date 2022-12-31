/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [start, end] = [0, nums.length-1]

    while(start <= end ){
        let mid = Math.floor((start+end)/2)
        let val = nums[mid]
        if(val === target){
            return mid; 
        }else if(target > val){
            start = mid +1; 
        } else if(target < val){
            end = mid - 1; 
        }
    }
    return -1; 
};
