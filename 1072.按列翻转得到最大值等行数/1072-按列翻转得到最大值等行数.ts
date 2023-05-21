function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const map:Map<number, number>=new Map()
    const m:number=matrix.length, n:number=matrix[0].length;
    for(let i:number=0; i<m; i++){
        const arr:Array<string>=new Array(n).fill('');
        for(let j:number=0; j<n; j++){
            arr[j]=''+(matrix[i][j]^matrix[i][0])
        }
        let _key:string=arr.join('')
        map[_key]=(map[_key]||0)+1
    }

    let ans:number=0
    for(const key in map){
        ans=Math.max(ans, map[key])
    }
    return ans
};