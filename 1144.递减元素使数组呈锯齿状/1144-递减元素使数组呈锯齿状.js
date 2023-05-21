/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
    const n=nums.length;
    let even=0, odd=0;

    let tmp_nums=[...nums];

    for(let i=0; i<n; i+=2){
        let left=tmp_nums[i-1]||0, right=tmp_nums[i+1]||0;
        // console.log(left, right);
        if(left>=tmp_nums[i]) even+=left-tmp_nums[i]+1, tmp_nums[i-1]=tmp_nums[i]-1;
        if(right>=tmp_nums[i]) even+=right-tmp_nums[i]+1, tmp_nums[i+1]=tmp_nums[i]-1;
    }

    tmp_nums=[...nums];

    for(let i=1; i<n; i+=2){
        let left=tmp_nums[i-1]||0, right=tmp_nums[i+1]||0;
        // console.log(left, right);
        if(left>=tmp_nums[i]) odd+=left-tmp_nums[i]+1, tmp_nums[i-1]=tmp_nums[i]-1;
        if(right>=tmp_nums[i]) odd+=right-tmp_nums[i]+1, tmp_nums[i+1]=tmp_nums[i]-1;
    }
    console.log(even, odd);

    return Math.min(even, odd);
};