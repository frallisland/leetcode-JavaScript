/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let cnt=new Map();
    for(let num of nums){
        if(num%2) continue;
        if(cnt.has(num)){
            cnt.set(num, cnt.get(num)+1);
        }else{
            cnt.set(num, 1);
        }
    }
    
    let res=1e9, c=0;
    // console.log(cnt);
    for(let [k, v] of cnt.entries()){
        // console.log(k, v)
        if(v>c || (v===c && k<res)){
            c=v;
            res=k;
        }
    }
    return res===1e9?-1:res;
};