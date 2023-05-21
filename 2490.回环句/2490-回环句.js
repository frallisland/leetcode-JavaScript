/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(s) {
    const words=s.split(' ');
    const n=words.length;
    
    for(let i=0; i<n-1; i++){
        if(words[i][words[i].length-1]!==words[i+1][0]){
            return false;
        }
    }
    
    return words[n-1][words[n-1].length-1]===words[0][0];
};