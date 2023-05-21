/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */

var maximumTastiness = function(price, k) {
    const n=price.length;
    price.sort((a, b)=>a-b);
    let dl=0, dr=Math.floor((price[n-1]-price[0])/(k-1))+1;

    function check(d){
        let cnt=1, x0=price[0];
        for(let x of price){
            if(x>=x0+d){
                cnt++;
                x0=x;
            }
        }
        return cnt>=k;
    }

    let ans=0;
    while(dl<=dr){
        let m=dl+Math.floor((dr-dl)/2);
        if(check(m)){
            ans=Math.max(ans, m);
            dl=m+1;
        }else{
            dr=m-1;
        }
    }
    return ans;
};