/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let ans=0;
    const n=s.length;
    
    function check(t){
        let ones=0, half=Math.floor(t.length/2);
        for(let ch of t){
            if(ch==='1') ones++;
        }
        
        if(ones!==half) return false;
        
        let tar=new Array(half).fill(0).map(_=>'0');
        return tar.join('')===t.slice(0, half);
    }
    
    for(let i=0; i<n; i++){
        for(let j=i+1; j<=n; j++){
            if((j-i)%2) continue;
            if(check(s.slice(i, j))){
                ans=Math.max(ans, j-i);
            }
        }
    }
    return ans;
};