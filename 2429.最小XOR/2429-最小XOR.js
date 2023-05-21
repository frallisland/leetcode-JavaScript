/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function getCnt(num){
    let ans=0;
    while(num){
        if(num&1) ans++;
        num>>=1;
    }
    return ans;
}

var minimizeXor = function(num1, num2) {
    let ans=0;
    let cnt=getCnt(num2);
    for(let i=30; i>=0 && cnt; --i){
        if(num1 & (1<<i)){
            ans^=(1<<i);
            cnt--;
        }
    }
    
    for(let i=0; i<=30 && cnt; i++){
        if(!(num1&(1<<i))){
            ans^=(1<<i);
            --cnt;
        }
    }
    return ans;
};