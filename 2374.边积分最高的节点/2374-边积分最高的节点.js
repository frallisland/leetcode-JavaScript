/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function(edges) {
    const en=edges.length;
    let cnts=new Array(en).fill(0);
    let mxVal=0;
    for(let i=0; i<en; i++){
        let root=edges[i];
        cnts[root]+=i;
        mxVal=Math.max(mxVal, cnts[root]);
    }
    let ans=-1;
    for(let i=0; i<en; i++){
        if(cnts[i]===mxVal){
            ans=i;
            break;
        }
    }
    return ans;
};