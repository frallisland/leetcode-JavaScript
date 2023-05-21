/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var makeIntegerBeautiful = function(n, target) {
    function digitSum(num){
        let ans=0;
        while(num){
            ans+=num%10;
            num=Math.floor(num/10);
        }
        return ans;
    }
    if(digitSum(n)<=target) return 0;
    // 非负数，那么只能使每一位为0， 13
    let nums=[], index=0, temp=n, curSum=0;
    while(temp){
        let res=temp%10;
        temp=Math.floor(temp/10);
        if(index===0) curSum+=10-res;
        else curSum+=(10-res-1)*Math.pow(10, index);
        nums.push(curSum);
        index++;
    }
    console.log(nums);
    let ans=0;
    for(let num of nums){
        let ds=digitSum(num+n);
        if(ds<=target){
            ans=num;
            break;
        }
    }
    return ans;
};