function numTilePossibilities(tiles: string): number {
    let set:Set<string> =new Set()
    const len:number=tiles.length
    function backtrack(path:Array<string>, n:number, visit:number){
        if(path.length===n){
            ans.push(path.join(''));
            return;
        }

        for(let i=0; i<n; i++){
            if(visit&(1<<i)) continue;
            path.push(tiles[i]);
            visit|=(1<<i);
            backtrack(path, n, visit);
            visit^=(1<<i);
            path.pop();
        }
    }
    let ans=[];
    backtrack([], tiles.length, 0);

    for(let item of ans){
        for(let i=0; i<(1<<len); i++){
            let cur:string=''
            let select:number=i, idx=0
            while(select>0){
                if(select&1) cur+=item[idx]
                select>>=1
                idx++
            }
            if(cur==='') continue
            set.add(cur)
            }
    }
    // console.log(1<<len, set)
    return set.size
};