/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(bs, ts) {
    bs.sort((a,b)=>b[1]-a[1]);
    
    let ans=0, index=0;
    while(ts && index<bs.length){
        let select=Math.min(ts, bs[index][0]);
        ans+=select*bs[index][1];
        index++;
        ts-=select;
    }
    return ans;
};