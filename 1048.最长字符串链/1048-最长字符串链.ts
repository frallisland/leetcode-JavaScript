function check(a:string, b:string):boolean{
    if(a.length<b.length) [a, b]=[b, a];
    let dif:number=0, ia:number=0, ib:number=0;
    const an=a.length, bn=b.length;
    while(ia<an && ib<bn){
        if(a[ia]!==b[ib]){
            ia++;
            dif++;
        }else{
            ia++;
            ib++;
        }
    }
    return dif===1 || (ib===bn && dif===0);
}

function longestStrChain(words: string[]): number {
    const n=words.length;
    let dp=new Array(n).fill(1);
    words.sort((a, b)=>a.length-b.length);
    
    for(let i=1; i<n; i++){
        for(let j=i-1; j>=0; j--){
            if(words[i].length-words[j].length===0) continue;
            else if(words[i].length-words[j].length>1) break;
            else{
                if(check(words[i], words[j])){
                    dp[i]=Math.max(dp[i], dp[j]+1);
                }
            }
        }
    }
    return Math.max(...dp);
};