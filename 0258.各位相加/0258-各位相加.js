/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    function add(num){
        let ans=0;
        while(num){
            ans+=(num%10);
            num=Math.floor(num/10);
        }
        return ans;
    }

    while(num>=10){
        num=add(num);
    }
    return num;
};