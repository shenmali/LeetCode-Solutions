/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length-1;i++){
        for(let k = i+1; k<nums.length; k++){
            if(target === nums[i]+nums[k]){
            return [i,k]
            }
        }
        
    }
    
};