/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const n=nums.length;
    let ans=[];
    nums.sort((a, b)=>a-b);
    
    for(let num of nums){
        let flag=false;
        for(let arr of ans){
            if(!arr.includes(num)){
                arr.push(num);
                flag=true;
                break;
            }
        }
        if(!flag){
            ans.push([num]);
        }
    }
    return ans;
};