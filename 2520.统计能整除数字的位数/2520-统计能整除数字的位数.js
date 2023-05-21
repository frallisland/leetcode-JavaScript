/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let t=num, ans=0;
    while(num){
        let d=num%10;
        num=Math.floor(num/10);
        if(t%d===0) ans++;
    }
    return ans;
};