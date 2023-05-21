/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    const qn=queries.length;
    const records=new Array(n).fill(0);
    const ans=new Array(qn).fill(0);
    
    let preSum=0;
    for(let i=0; i<qn; i++){
        let [_i, c]=queries[i];
        if(records[_i]===0){
            if(_i-1>=0 && records[_i-1]===c) preSum++;
            if(_i+1<n && records[_i+1]===c) preSum++;
        }else{
            if(_i-1>=0 ){
                if(records[_i]===records[_i-1]){
                    if(c!==records[_i]) preSum--;
                    
                }else{
                    if(records[_i-1]===c) preSum++;
                }
            }
            if(_i+1<n){
                if(records[_i]===records[_i+1]){
                    if(c!==records[_i]) preSum--;
                    
                }else{
                    if(records[_i+1]===c) preSum++;
                } 
            }
        }
        records[_i]=c;
        ans[i]=preSum;
    }
    return ans;
};