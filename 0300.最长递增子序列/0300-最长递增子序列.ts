function lengthOfLIS(nums: number[]): number {
    // 向左找，找到第一个比它小的数字
    const n:number=nums.length;
    let arr:number[]=new Array(n).fill(1);

    for(let i:number=0; i<n; i++){
        for(let j=i-1; j>=0; j--){
            if(nums[j]<nums[i]){
                arr[i]=Math.max(arr[j]+1, arr[i]);
            }
        }
    }
    // console.log(arr)
    return Math.max(...arr);
};