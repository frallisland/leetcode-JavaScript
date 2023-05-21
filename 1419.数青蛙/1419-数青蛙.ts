function minNumberOfFrogs(croakOfFrogs: string): number {
    if(croakOfFrogs.length%5) return -1;

    const counts:Map<string, number>=new Map();
    const pres:Map<string, string>=new Map([['r','c'], ['o','r'], ['a','o'], ['k','a']]);

    let ans:number=0;
    for(let ch of croakOfFrogs){
        let count=counts.get(ch)||0;

        if(ch==='c'){
            ans=Math.max(ans, count+1);
        }else{
            let preCount=counts.get(pres.get(ch))||0
            if(preCount<count+1) return -1;
        }
        counts.set(ch, count+1);

        if(ch==='k'){
            for(let ch of 'croak'){
                counts.set(ch, counts.get(ch)-1)
            }
        }
    }
    for(let ch of 'croak'){
        if(counts.get(ch)){
            return -1;
        }
    }
    return ans;
};