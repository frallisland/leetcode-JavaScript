/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    arr.sort((a, b)=>a-b);
    const n=arr.length;
    
    let preSum=new Array(n).fill(0);
    preSum[0]=arr[0];

    let ans=-1, dif=Infinity;
    for(let i=1; i<n; i++){
        preSum[i]=preSum[i-1]+arr[i];
    }
    function findIndex(target){
        if(target<arr[0]) return -1;
        
        // 最后一个小于等于 i 的下标
        let left=0, right=n-1;
        while(left<right){
            let mid=Math.floor((left+right+1)/2);
            if(arr[mid]>target){
                right=mid-1;
            }else{
                left=mid;
            }
        }
        return right;
    }

    let tmax=_.max(arr);
    for(let i=0; i<=tmax; i++){
        
        let right=findIndex(i);

        let leftSum=right===-1?0:preSum[right], rightSum=(n-right-1)*i;

        
        if(Math.abs(leftSum+rightSum-target)<dif){
            dif=Math.abs(leftSum+rightSum-target);
            ans=i;
        }

    }

    return ans;
};