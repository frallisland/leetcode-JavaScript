/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let ans=0, bal=0;
    for(let i=0; i<s.length; i++){
        bal+=(s[i]==='('?1:-1);
        if(s[i]===')' && s[i-1]==='('){
            ans+=(1<<bal);
        }
    }
    return ans;
};