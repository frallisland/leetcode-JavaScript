/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    // 有序和无序的块数
    let ans=0, mxIndex=-1;
    for(let i=0; i<arr.length; i++){
        if(i>mxIndex){
            ans++;
        }
        mxIndex=Math.max(mxIndex, arr[i]);
    }
    return ans;
};