/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let ans=0, index=-1;
    if(ruleKey==='color') index=1;
    else if(ruleKey==='type') index=0;
    else index=2;
    for(let i=0; i<items.length; i++){
        if(items[i][index]===ruleValue){
            ans++;
        }
    }
    return ans;
};