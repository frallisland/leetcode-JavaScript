/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    // ���������Ŀ���
    let ans=0, mxIndex=-1;
    for(let i=0; i<arr.length; i++){
        if(i>mxIndex){
            ans++;
        }
        mxIndex=Math.max(mxIndex, arr[i]);
    }
    return ans;
};