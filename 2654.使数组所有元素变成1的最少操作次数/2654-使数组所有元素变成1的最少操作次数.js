/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n=nums.length
    function gcd(a, b){
        if(a%b==0) return b;
        return gcd(b, a%b);
    }
    
    let g1=gcd(nums[0], nums[1])
    for(let i=1; i<n; i++){
        g1=gcd(g1, nums[i])
    }
    if(g1!==1) return -1;
    

    let ones=0;
    for(let x of nums){
        if(x===1){
            ones++
        }
    }
    
    if(ones!==0) return n-ones;

    for(let i=0; i<n-1; i++){
        let g=gcd(nums[i], nums[i+1])
        if(g==1){
            console.log(i)
            return n
        }
    }
    let ops=1e9
    for(let i=0; i<n; i++){
        let g=nums[i]
        for(let j=i+1; j<n; j++){
            g=gcd(g, nums[j])
            if(g===1){
                ops=Math.min(ops, j-i);
                break;
            }
        }
    }
    
    return n-1+ops;
};