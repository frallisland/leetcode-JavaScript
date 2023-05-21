/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let str=(3*n^n).toString(2);
    let cnt=0;
    for(let ch of str){
        if(ch==='1'){
            cnt++;
        }
    }
    return cnt;
};