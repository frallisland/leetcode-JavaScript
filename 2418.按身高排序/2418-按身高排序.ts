function sortPeople(names: string[], heights: number[]): string[] {
    const n:number=names.length;
    let idxs=new Array(n).fill(0).map((_, i)=>i);

    idxs.sort((a, b)=>{
        return heights[b]-heights[a];
    })
    let ans:string[]=new Array(n).fill(null)
    for(let i=0; i<n; i++){
        ans[i]=names[idxs[i]];
    }
    return ans;
};