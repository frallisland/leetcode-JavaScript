/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    const index=new Map();
    for(let i=0; i<s.length; i++){
        const c=s[i];
        if(!index.has(c)){
            index.set(c, []);
            index.get(c).push(-1);
        }
        index.get(c).push(i);
    }

    let ans=0;
    for(let [_, arr] of index.entries()){
        arr.push(s.length);
        for(let i=1; i<arr.length-1; i++){
            ans+=(arr[i]-arr[i-1])*(arr[i+1]-arr[i]);
        }
    }
    return ans;
};