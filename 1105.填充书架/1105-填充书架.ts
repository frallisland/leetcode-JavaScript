function minHeightShelves(books: number[][], shelfWidth: number): number {
    const n:number=books.length;
    let dp:Array<number>=new Array(n+1).fill(Infinity);
    dp[0]=0;

    for(let i:number=0; i<n; i++){
        let maxh:number=0, leftw:number=shelfWidth;
        for(let j:number=i; j>=0; j--){
            leftw-=books[j][0];
            if(leftw<0) break;
            maxh=Math.max(maxh, books[j][1]);
            dp[i+1]=Math.min(dp[i+1], dp[j]+maxh);
        }
    }
    return dp[n]
};