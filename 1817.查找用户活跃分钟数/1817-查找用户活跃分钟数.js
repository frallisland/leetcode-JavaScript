/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let map=new Map();
    for(let [id, time] of logs){
        let op=map.get(id)||new Set();
        op.add(time);
        map.set(id, op);
    }
    let ans=new Array(k).fill(0);
    for(let [k, set] of map){
        // console.log(set, set.size);
        let idx=set.size;
        ans[idx-1]++;
    }
    return ans;
};