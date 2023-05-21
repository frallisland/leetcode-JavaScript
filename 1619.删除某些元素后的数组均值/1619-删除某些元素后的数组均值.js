/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b);
    const n=arr.length;
    let len=Math.floor(n*0.05);
    arr.splice(n-len, len);
    arr.splice(0, len);

    let _sum=arr.reduce((pre, cur)=>{
        return pre+cur
    });
    return _sum/arr.length;
};