/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    const n=nums.length;
    let pos=0, neg=0;
    let maxL=pos;

    for(let i=0; i<n; i++){
        if(nums[i]>0){
            pos++;
            neg+=(neg>0?1:0);
        }else if(nums[i]<0){
            let tp=(neg>0?neg+1:0);
            let tn=pos+1;
            [pos, neg]=[tp, tn];
        }else{
            pos=neg=0;
        }
        maxL=Math.max(maxL, pos);
    }
    return maxL;
};