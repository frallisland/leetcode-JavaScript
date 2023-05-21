/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function(arr, m) {
    const n=arr.length;
    let endpoints=new Array(n+1).fill(0).map(_=>[-1, -1]);

    let cnt=0, ret=-1;

    for(let i=0; i<n; i++){
        let left=arr[i], right=arr[i];
        
        if(arr[i]>1 && endpoints[arr[i]-1][0]!==-1){
            left=endpoints[arr[i]-1][0];
            leftLength=endpoints[arr[i]-1][1]-endpoints[arr[i]-1][0]+1;
            if(leftLength===m){
                cnt--;
            }
        }

        if(arr[i]<n && endpoints[arr[i]+1][1]!==-1){
            right=endpoints[arr[i]+1][1];
            rightLength=endpoints[arr[i]+1][1]-endpoints[arr[i]+1][0]+1;
            if(rightLength===m){
                cnt--;
            }
        }

        let len=right-left+1;
        if(len===m) cnt++;
        if(cnt>0) ret=i+1;
        endpoints[left]=endpoints[right]=[left, right];
    }
    return ret;
};