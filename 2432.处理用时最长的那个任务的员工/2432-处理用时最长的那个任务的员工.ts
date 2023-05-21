function hardestWorker(n: number, logs: number[][]): number {
    let ans:number=-1, maxCost:number=0, preTime:number=0;
    logs.sort((a, b)=>a[1]-b[1]);

    for(let i:number=0; i<logs.length; i++){
        if(logs[i][1]-preTime>maxCost || (logs[i][1]-preTime===maxCost && logs[i][0]<ans)){
            maxCost=logs[i][1]-preTime;
            ans=logs[i][0];
        }
        preTime=logs[i][1];
    }
    return ans;
};