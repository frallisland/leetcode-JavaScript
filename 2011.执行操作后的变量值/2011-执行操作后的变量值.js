/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(ops) {
    let ans=0;
    for(let op of ops){
        if(op==='++X' || op==='X++') ans++;
        if(op==='--X' || op==='X--') ans--;
    }
    return ans;
};