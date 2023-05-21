/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var cycleLengthQueries = function(n, qs) {
    let ans=[];
    for(let [a, b] of qs){
        let res=1;
        while(a!==b){
            if(a>b) a=Math.floor(a/2);
            else if(a<b) b=Math.floor(b/2);
            res++;
        }
        ans.push(res);
    }
    return ans;
};