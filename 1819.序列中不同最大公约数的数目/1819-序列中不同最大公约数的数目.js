/**
 * @param {number[]} nums
 * @return {number}
 */
function gcd(a, b){
    if(a%b==0) return b;
    return gcd(b, a%b);
}
var countDifferentSubsequenceGCDs = function(nums) {
    let maxVal=_.max(nums);
    let occur=new Array(maxVal+1).fill(false);
    for(let num of nums){
        occur[num]=true;
    }

    let ans=0;
    for(let i=1; i<=maxVal; i++){
        let maxCom=0;
        for(let j=i; j<=maxVal; j+=i){
            if(occur[j]){
                if(maxCom===0){
                    maxCom=j;
                }else{
                    maxCom=gcd(maxCom, j);
                }
                if(maxCom===i){
                    ans++;
                    break;
                }
            }
        }
    }
    return ans;
};