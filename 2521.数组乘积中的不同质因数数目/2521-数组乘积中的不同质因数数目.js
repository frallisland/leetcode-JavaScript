/**
 * @param {number[]} nums
 * @return {number}
 */
function primes(num){
    let fs=new Set();
    for(let i=2; i<=Math.floor(num/i); i++){
        while(num%i===0){
            num=Math.floor(num/i);
            fs.add(i);
        }
    }
    if(num>1) fs.add(num);
    return fs.size?fs:[num];
}


var distinctPrimeFactors = function(nums) {
    let set=new Set();
    for(let num of nums){
        let tt=primes(num);
        for(let t of tt){
            set.add(t);
        }
    }
    return set.size;
};