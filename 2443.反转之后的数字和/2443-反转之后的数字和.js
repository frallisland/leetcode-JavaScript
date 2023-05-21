/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    if(num===0) return true;
    function reverse(num){
        let ans=0, cnt=1;
        while(num){
            let res=num%10;
            ans*=10;
            ans+=res;
            num=Math.floor(num/10);
        }
        return ans;
    }
    
    for(let i=1; i<num; i++){
        let tmp=reverse(i);
        if(tmp+i===num) return true;
    }
    return false;
};