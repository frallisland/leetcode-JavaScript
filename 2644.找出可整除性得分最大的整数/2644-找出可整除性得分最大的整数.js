/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divs) {
    const n=nums.length, m=divs.length;
    let cnts=new Array(m).fill(0);
    
    for(let i=0; i<m; i++){
        let cnt=0;
        for(let a of nums){
            if(a%divs[i]===0) cnt++;
        }
        cnts[i]=cnt;
    }
    
    let mx=0, val=divs[0];
    for(let i=0; i<m; i++){
        if(cnts[i]>mx || (cnts[i]===mx && val>divs[i])){
            mx=cnts[i];
            val=divs[i];
        }
    }
    return val;
};