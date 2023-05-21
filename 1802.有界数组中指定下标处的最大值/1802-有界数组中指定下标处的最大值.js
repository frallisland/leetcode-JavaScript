/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    function getSum(x, index){
        let left=0, right=0;
        let llen=index, rlen=n-index-1;

        if(x>llen){
            left=Math.floor((2*x-llen-1)*llen/2);
        }else{
            left=Math.floor(x*(x-1)/2)+llen-x+1;
        }

        if(rlen<x){
            right=Math.floor((2*x-rlen-1)*rlen/2);
        }else{
            right=Math.floor(x*(x-1)/2)+rlen-x+1;
        }

        return left+x+right;
    }

    let left=1, right=maxSum;
    while(left<right){
        let mid=Math.floor((left+right+1)/2);
        // console.log(getSum(mid, index), mid);
        if(getSum(mid, index)<=maxSum){
            left=mid;
        }else{
            right=mid-1;
        }
    }
    return left;
};