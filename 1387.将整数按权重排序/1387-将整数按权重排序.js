/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let mp=new Map();
    mp.set(1,0);

    function getWeight(x){
        if(x===1) return 0;
        if(mp.has(x)){
            return mp.get(x);
        }
        let nx;
        if(x%2){
            nx=3*x+1;
        }else{
            nx=Math.floor(x/2);
        }
        let res=getWeight(nx)+1;
        if(!mp.has(x)) mp.set(x, res);
        return res;
    }

    let nums=[];
    for(let i=lo; i<=hi; i++){
        nums.push(i);
        getWeight(i);
    }

    // console.log(mp);
    nums.sort((a, b)=>{
        return mp.get(a)-mp.get(b);
    });
    // console.log(nums);
    return nums[k-1];
};