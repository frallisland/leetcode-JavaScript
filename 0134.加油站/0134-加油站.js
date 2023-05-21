/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n=gas.length;
    let i=0;
    while(i<n){
        let cnt=0, sumGas=0, sumCost=0;
        while(cnt<n){
            let j=(i+cnt)%n;
            sumCost+=cost[j];
            sumGas+=gas[j];
            if(sumGas<sumCost){
                break;
            }
            cnt++;
        }
        if(cnt===n){
            return i;
        }else{
            i=i+cnt+1;
        }
    }
    return -1;
};