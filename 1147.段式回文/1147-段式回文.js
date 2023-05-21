/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    if(text==='') return 0;
    if(text.length===1) return 1; 
    const n=text.length;
    // console.log(text, n);
    for(let i=1; i<=Math.floor((n+1)/2); i++){
        if(text.slice(0, i)===text.slice(n-i, n)){
            return 2+longestDecomposition(text.slice(i, n-i));
        }
    }
    return 1;
};