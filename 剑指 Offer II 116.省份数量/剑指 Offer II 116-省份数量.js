/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isCon) {
    const n=isCon.length;
    let f=new Array(n).fill(0).map((_, i)=>i);

    function find(x){
        // console.log(f, f[x], x);
        if(x!==f[x]) f[x]=find(f[x]);
        return f[x];
    }

    function merge(x, y){
        x=find(x);
        y=find(y);

        if(x!==y){
            f[x]=y;
        }
    }

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(isCon[i][j]){
                merge(i, j);
            }
        }
    }

    let ans=0;
    for(let i=0; i<n; i++){
        if(f[i]===i){
            ans++;
        }
    }
    return ans;
};