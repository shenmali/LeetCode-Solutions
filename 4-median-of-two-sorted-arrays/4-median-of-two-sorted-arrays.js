/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergeTwoArray = [...nums1, ...nums2].sort(function(a,b) { return a - b; })
    const middleIndex = mergeTwoArray.length / 2;
    if (mergeTwoArray.length % 2 === 0) {
        return (mergeTwoArray[middleIndex - 1] + mergeTwoArray[middleIndex]) / 2;
    }else{
        return mergeTwoArray[Math.ceil(middleIndex - 1)]
    }  
};