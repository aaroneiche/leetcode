/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sum = nums[0];
  let output = [nums[0]];
  for(i = 1; i < nums.length; i++) {
    output.push(sum += nums[i]);
  }
  return output;
};

console.log(runningSum([3,1,2,10,1]));