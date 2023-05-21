/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const n=words.length, qn=queries.length;
    
    function check(word){
        return (word[0]==='a' || word[0]==='e' || word[0]==='i' || word[0]==='o' || word[0]==='u') && (word[word.length-1]==='a' || word[word.length-1]==='e' || word[word.length-1]==='i' || word[word.length-1]==='o' || word[word.length-1]==='u');
    }
    let preSum=new Array(n+1).fill(0);
    
    for(let i=0; i<n; i++){
        let cur=check(words[i]);
        preSum[i+1]=preSum[i]+cur;
    }
    
    let ans=new Array(qn).fill(0);
    
    for(let i=0; i<qn; i++){
        let [li, ri]=queries[i];
        ans[i]=preSum[ri+1]-preSum[li];
    }
    return ans;
};