function numPairsDivisibleBy60(time: number[]): number {
    const counts:Array<number>=new Array(60).fill(0);

    let ans:number=0;
    for(let t of time){
        let res=t%60;
        let either=(60-res)%60;
        ans+=counts[either];
        counts[res]++;
    }
    return ans;
};