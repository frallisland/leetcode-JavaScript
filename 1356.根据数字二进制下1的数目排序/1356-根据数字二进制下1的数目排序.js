/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    function help(num){
        let cnt=0;
        while(num){
            if(num&1) cnt++;
            num>>=1;
        }
        return cnt;
    }
    arr.sort((a, b)=>{
        let a1=help(a), b1=help(b);
        if(a1!==b1) return a1-b1;
        return a-b;
    })
    return arr;
};