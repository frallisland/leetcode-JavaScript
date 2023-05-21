/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let ans=0, flag=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='|') flag^=1;
        if(s[i]==='*' && !flag){
            ans++;
        }
    }
    return ans;
};