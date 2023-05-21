/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let _sum=_.sum(nums);
    let ds=0;
    for(let num of nums){
        while(num){
            ds+=(num%10);
            num=Math.floor(num/10);
        }
    }
    return Math.abs(_sum-ds);
};