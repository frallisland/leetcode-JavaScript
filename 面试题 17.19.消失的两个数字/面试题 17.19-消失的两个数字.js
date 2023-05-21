/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
    const n=nums.length+2
    let xorsum=0
    for(const num of nums) xorsum^=num
    for(let i=1; i<=n; i++) xorsum^=i

    let lsb=xorsum&(-xorsum)
    let type1=0, type2=0
    for(const num of nums){
        if(num&lsb){
            type1^=num
        }else{
            type2^=num
        }
    }

    for(let i=1; i<=n; i++){
        if(i&lsb){
            type1^=i
        }else{
            type2^=i
        }
    }
    return [type1, type2]
};