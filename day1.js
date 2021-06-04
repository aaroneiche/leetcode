/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for(j = 0; j < nums.length; j++) {
    for(i = j+1; i < nums.length; i++) {
      // console.log(nums[j], nums[i]);
      if(nums[j] + nums[i] == target) {
        console.log(nums[j] + nums[i] == target);
        return [j,i];
      }
    }
  }
};




// console.log(twoSum([1,5],6));
// console.log(twoSum([2,8,4],6));

// console.log(twoSum([4,7,10,25,2,3,6,8],15));
// console.log(twoSum([-4,7,10,25,2,3,6,8],3));
// console.log(twoSum([2,5,5,11],10));