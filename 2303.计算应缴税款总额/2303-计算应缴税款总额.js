/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let ans=0, pre=0;
    for(let i=0; i<brackets.length; i++){
        if(pre>=income) break;
        let mn=Math.min(brackets[i][0], income);
        ans+=(mn-pre)*brackets[i][1]/100;
        pre=brackets[i][0];
        // console.log(pre, ans, mn, brackets[i]);
    }
    return ans;
};