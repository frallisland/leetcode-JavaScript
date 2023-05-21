/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(s) {
    const n=s.length;
    for(let i=n-2; i>=0; i--) s[i]+=s[i+1];

    let cache=new Array(n).fill(0).map(_=>new Array(Math.floor((n+1)/4)+1).fill(-1));

    function dfs(i, m){
        if(i>=n) return 0;
        if(i+m*2>=n) return s[i];

        let res=cache[i][m];
        if(res!==-1) return res;

        let mn=Number.MAX_VALUE;
        for(let x=1;x<=2*m; x++){
            mn=Math.min(mn, dfs(i+x, Math.max(m, x)));
        }
        cache[i][m]=s[i]-mn;
        return cache[i][m];
    }
    return dfs(0, 1);
};