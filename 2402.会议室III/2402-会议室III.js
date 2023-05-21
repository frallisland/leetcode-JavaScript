/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, ms) {
    
    let cnt=new Array(n).fill(0);
    // cur因该是long long
    let cur=new Array(n).fill(0);
    ms.sort((a, b)=>a[0]-b[0]);
    const len=ms.length;
    
    for(let i=0; i<len; i++){
        let flag=0;
        // `空闲`的会议室
        for(let j=0; j<n; j++){
            if(cur[j]<=ms[i][0]){
                flag=1;
                ++cnt[j];
                cur[j]=ms[i][1];
                break;
            }
        }
        if(flag) continue;
        let k=0;
        for(let j=1; j<n; j++){
            if(cur[j]<cur[k]) k=j;
        }
        ++cnt[k];
        cur[k]+=(ms[i][1]-ms[i][0]);
    }
    let ret=0;
    for(let i=1; i<n; i++){
        if(cnt[i]>cnt[ret]) ret=i;
    }
    return ret;
};