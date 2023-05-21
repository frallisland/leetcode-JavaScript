/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    const n=bank.length;
    let tar=-1;
    for(let i=0; i<n; i++){
        if(bank[i]===endGene){
            tar=i;
        }
    }
    if(tar===-1) return -1;

    function check(sx, sy){
        if(sx.length!==sy.length) return false;

        let cnt=0;
        for(let i=0; i<sx.length; i++){
            if(sx[i]!==sy[i]){
                cnt++;
            }
        }
        return cnt===1;
    }
    let ds=new Array(n).fill(Infinity);
    ds[tar]=0;
    let q=[tar], level=0;
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let x=q.shift();
            for(let y=0; y<n; y++){
                if(x!==y && ds[y]>10010 && check(bank[x], bank[y])){
                    ds[y]=level+1;
                    q.push(y);
                }
            }
        }
        level++;
    }

    let ans=Infinity;
    for(let i=0; i<n; i++){
        if(check(startGene, bank[i])){
            ans=Math.min(ans, ds[i]+1);
        }
    }
    return ans===Infinity?-1:ans;
};