var numSubarrayBoundedMax = function(nums, left, right) {
    let mostK=function(K){
        let pre=0, ans=0;
        for(const num of nums){
            if(num<=K) pre+=1;
            else pre=0;
            console.log(num, pre);
            ans+=pre;
        }
        return ans;
    }
    return mostK(right)-mostK(left-1);
};