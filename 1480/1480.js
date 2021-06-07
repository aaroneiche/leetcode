/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

/*
  //Here's my first attempt:
  let sum = nums[0];
  let output = [nums[0]];
  for(i = 1; i < nums.length; i++) {
    output.push(sum += nums[i]);
  }
 */

  let output = [];
  nums.forEach((num,i)=>{
    output.push(num + (output[i-1] || 0));
  });

  return output;
};
