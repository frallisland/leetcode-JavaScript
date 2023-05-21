/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(begin, end, wlist) {
    if(!wlist.includes(end)) return 0;

    function check(s1, s2){
        if(s1.length!==s2.length) return false;
        
        let cnt=0;
        for(let i=0; i<s1.length; i++){
            if(s1[i]!==s2[i]){
                cnt++;
            }
        }
        return cnt===1;
    }

    const n=wlist.length;
    let dist=new Array(n).fill(-1);
    let tarIdx=wlist.findIndex(v=>v===end);
    
    dist[tarIdx]=0;
    let q=[tarIdx], step=1;
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let x=q.shift();
            for(let j=0; j<n; j++){
                if(dist[j]===-1 && check(wlist[x], wlist[j])){
                    q.push(j);
                    dist[j]=step;
                }
            }
        }
        step++;
    }
    // console.log(tarIdx, dist);

    let ans=Infinity;
    for(let i=0; i<n; i++){
        if(check(begin, wlist[i])){
            if(dist[i]===-1) continue;
            ans=Math.min(ans, dist[i]+2);
        }
    }
    return ans===Infinity?0:ans;
};