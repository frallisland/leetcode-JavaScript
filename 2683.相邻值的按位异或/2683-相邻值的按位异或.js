/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    const n=derived.length
    
    function push(st=1){
        const recs=new Array(n).fill(0)
        recs[0]=st
        
        for(let i=0; i<n; i++){
            recs[i+1]=recs[i]^derived[i]
        }
        
        return recs[n-1]^recs[0]===derived[n-1]
    }
    return push() || push(st=0)
};