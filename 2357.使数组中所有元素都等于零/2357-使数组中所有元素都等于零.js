/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ans=0;
    let set=new Set();
    for(let num of nums){
        if(num && !set.has(num)){
            set.add(num);
            ans++;
        }
    }
    return ans;
};