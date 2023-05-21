/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const n=nums.length;

    function check(arr){
        let d=arr[1]-arr[0];
        for(let i=1; i<arr.length; i++){
            if(arr[i]-arr[i-1]!==d) return false;
        }
        return true;
    }

    let ans=[];
    for(let i=0; i<l.length; i++){
        let slice_arr=nums.slice(l[i], r[i]+1);
        slice_arr.sort((a, b)=>a-b);
        ans.push(check(slice_arr));
    }
    return ans;
};