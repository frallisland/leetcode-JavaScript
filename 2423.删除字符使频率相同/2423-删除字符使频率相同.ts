function equalFrequency(word: string): boolean {
    let cnts:Array<number>=new Array(26).fill(0);
    for(let ch of word){
        let idx:number=ch.charCodeAt(0)-'a'.charCodeAt(0);
        cnts[idx]++;
    }

    let a:number=-1, b:number=-1;
    let cnt_a:number=0, cnt_b:number=0;
    let set:Set<number>=new Set();

    for(let cnt of cnts){
        if(cnt===0) continue;
        set.add(cnt);
    }
    
    if(set.size>2) return false;

    for(let cnt of cnts){
        if(cnt===0) continue;
        if(a===-1 ) a=cnt;
        else if(b===-1 && cnt!==a) b=cnt;

        if(a===cnt) cnt_a++;
        if(b===cnt) cnt_b++;
    }
    if(a<b) [a, b]=[b, a], [cnt_a, cnt_b]=[cnt_b, cnt_a];

    console.log(a, b, cnt_a, cnt_b);
    return (a==1 && b===-1 && cnt_a>1) || (a>1 && b==-1 && cnt_a==1) || (b===1 && cnt_b===1) || (a-b===1 && cnt_a===1);
};