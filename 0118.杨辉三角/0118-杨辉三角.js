/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans=[];
    for(let i=0; i<numRows; i++){
        let tmp=[];
        for(let j=0; j<=i; j++){
            if(j===0 || j===i){
                tmp.push(1);
            }else{
                tmp.push(ans[i-1][j-1]+ans[i-1][j]);
            }
        }
        ans.push(tmp);
    }
    return ans;
};