/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let t1=num1.split('').reverse(), t2=num2.split('').reverse();
    let mnLen=Math.min(t1.length, t2.length);
    let ans=new Array(mnLen).fill(0);

    let carry=0, i=0;
    for(; i<mnLen; i++){
        let t=carry+(t1[i]-0)+(t2[i]-0);
        ans[i]=t%10;
        carry=Math.floor(t/10);
    }

    while(i<t1.length){
        let t=carry+(t1[i]-0);
        ans.push(t%10);
        carry=Math.floor(t/10);
        i++;
    }
    while(i<t2.length){
        let t=carry+(t2[i]-0);
        ans.push(t%10);
        carry=Math.floor(t/10);
        i++;
    }
    if(carry){
        ans.push(carry);
    }
    return ans.reverse().join('');
};