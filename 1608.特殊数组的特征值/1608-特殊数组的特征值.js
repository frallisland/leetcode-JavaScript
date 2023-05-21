/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    let l=0, r=1010;

    function help(arr, k){
        let cnt=0;
        arr.forEach(v=>{
            if(v>=k){
                cnt++;
            }
        })
        return cnt;
    }
    while(l<=r){
        let m=Math.floor((l+r)/2);

        if(help(nums, m)<m){
            r=m-1;
        }else if(help(nums, m)>m){
            l=m+1;
        }else{
            return m;
        }
    }
    return -1;
};