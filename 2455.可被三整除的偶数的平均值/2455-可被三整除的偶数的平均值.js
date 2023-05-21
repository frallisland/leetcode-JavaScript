/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let cnt=0, _sum=0;
    for(let num of nums){
        if(num%6===0){
            _sum+=num;
            cnt++;
        }
    }
    return cnt? Math.floor(_sum/cnt):0;
};