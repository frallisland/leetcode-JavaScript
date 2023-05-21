/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const n=arr.length;
    let l=1, r=n-2, ans=-1;
    while(l<=r){
        let m=l+Math.floor((r-l)/2);
        if(arr[m]>arr[m-1]){
            ans=m;
            l=m+1;
        }else{
            r=m-1;
        }
    }
    return ans;
};