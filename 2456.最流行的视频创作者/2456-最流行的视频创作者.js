/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(cas, ids, vws) {
    const n=cas.length;
    let caVs=new Map(), caIds=new Map();
    // id 不应该重复出现
    let maxNum=0;
    for(let i=0; i<n; i++){
        let cvs=caVs.get(cas[i])||0;
        caVs.set(cas[i], cvs+vws[i]);
        maxNum=Math.max(maxNum, cvs+vws[i]);
        
        let cids=caIds.get(cas[i]) || [];
        cids.push([ids[i], vws[i]])
        caIds.set(cas[i], cids);
    }


    let ans=[];
    for(let [ca, vs] of caVs){
        if(vs<maxNum) continue;
        let cids=caIds.get(ca);
        cids.sort((a, b)=>{
            if(a[1]!==b[1]) return b[1]-a[1];
            const mn=Math.min(a[0].length, b[0].length);
            for(let i=0; i<mn; i++){
                if(a[0][i]<b[0][i]) return -1;
                else if(a[0][i]>b[0][i]) return 1;
            }
            return a[0].length<=b[0].length?-1:1;
        })
        console.log(cids);
        ans.push([ca, cids[0][0]]);
    }
    return ans;
};