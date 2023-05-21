/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    while(nums.length!==1){
        let t=[];
        for(let i=0; i<nums.length/2; i++){
            if(i%2){
                t.push(Math.max(nums[i*2], nums[2*i+1]));
            }else{
                t.push(Math.min(nums[2*i], nums[2*i+1]));
            }
        }
        nums=t;
    }
    return nums[0];
};