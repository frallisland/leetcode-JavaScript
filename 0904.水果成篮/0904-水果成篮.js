/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const n=fruits.length;
    let ans=1;
    let mp=new Map();
    for(let l=0, r=0; r<n; r++){
        mp.set(fruits[r], (mp.get(fruits[r])||0)+1);
        while(Array.from(mp).length>2){
            let tmp=mp.get(fruits[l]);
            tmp--;
            if(tmp===0){
                mp.delete(fruits[l]);
            }else{
                mp.set(fruits[l], tmp);
            }
            l++;
        }
        ans=Math.max(ans, r-l+1);
    }
    return ans;
};