/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let shuffled = [];
    let subsets = [];
    
    let c = 0;
    let o = 0;
    while(shuffled.length < nums.length){
        if(nums[c] != undefined) {
            shuffled.push(nums[c+o]);
            c += n;
        }else{
            c = 0;
            o++;
        }
    }
    return shuffled;
};


console.log(shuffle([2,5,1,3,4,7],3));
console.log(shuffle([1,2,3,4,4,3,2,1],4));
console.log(shuffle([1,1,2,2],2));