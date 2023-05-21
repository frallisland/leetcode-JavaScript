/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let ans=-1, pre=0, dif=0;
    for(let i=0; i<logs.length; i++){
        if(logs[i][1]-pre>dif || (logs[i][1]-pre===dif && logs[i][0]<ans)){
            ans=logs[i][0];
            dif=logs[i][1]-pre;
        }
        pre=logs[i][1];
    }
    return ans;
};