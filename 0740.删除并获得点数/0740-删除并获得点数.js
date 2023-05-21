/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let cnts=new Map();
    let dp=new Array(2).fill(0).map(_=>new Array(10010).fill(0));

    for(let num of nums){
        cnts.set(num, (cnts.get(num)||0)+1);
    }

    for(let i=1; i<10010; i++){
        let cnt=cnts.get(i)||0, pre=cnts.get(i-1)||0;
        dp[0][i]=Math.max(dp[0][i-1], dp[1][i-1]);
        dp[1][i]=dp[0][i-1]+cnt*i;
    }
    return Math.max(dp[0][10009], dp[1][10009]); 
};