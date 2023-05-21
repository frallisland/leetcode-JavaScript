function powerfulIntegers(x: number, y: number, bound: number): number[] {
    let ans:Array<number>=new Array();
    // ���� x=1 || y=1 ��Ҫ����
    if(x===1 && y===1){
        if(bound>=2) return [2];
        return [];
    }

    // ���߱���һ����Ϊ 1
    for(let i:number=0; i<100; i++){
        if(Math.pow(x, i)>bound) break;
        for(let j:number=0; j<100; j++){
            let temp:number=Math.pow(x, i)+Math.pow(y, j);
            if(temp>bound) break;
            if(!ans.includes(temp)) ans.push(temp);
        }
    }
    return ans;
};