/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let k=2, ans=0, n=fruits.length;
    let mp=new Map();
    for(let l=0, r=0; r<n; r++){
        if(!mp.has(fruits[r])){
            mp.set(fruits[r], 1);
            k-=1;
        }else{
            let val=mp.get(fruits[r]);
            mp.set(fruits[r], val+1);
        }
        
        while(k<0){
            let val=mp.get(fruits[l]);
            val--;
            if(val==0) k++, mp.delete(fruits[l]);
            else mp.set(fruits[l], val);
            l++;
        }
        ans=Math.max(ans, r-l+1);
    }
    return ans;
};