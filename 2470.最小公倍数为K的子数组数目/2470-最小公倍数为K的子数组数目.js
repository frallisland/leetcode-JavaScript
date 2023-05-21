/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function gcd(a, b){ // 最大公因数
    if(a%b===0) return b;
    return gcd(b, a%b);
}

var subarrayLCM = function(nums, k) {
    const n=nums.length;
    let ans=0;
    
    for(let l=0; l<n; l++){
        if(k%nums[l]) continue;
        let acc=1;
        for(let r=l; r<n; r++){
            let g=gcd(acc, nums[r]);
            let a=Math.floor(nums[r]/g), b=Math.floor(acc/g);
            acc=a*b*g;
            
            if(acc===k) ans++;
            else if(acc>k) break;
        }
    }
    return ans;
};