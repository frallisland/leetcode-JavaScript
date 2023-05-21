/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function(basket1, basket2) {
    let map=new Map();
    const n=basket1.length;
    
    let mn=_.min([...basket1, ...basket2]);
    
    for(let i=0; i<n; i++){
        let b1=basket1[i], b2=basket2[i];
        map.set(b1, (map.get(b1)||0)+1);
        map.set(b2, (map.get(b2)||0)-1);
    }
    
    let a=[];
    for(let [k, v] of map){
        if(v%2) return -1;
        for(let i=0; i<Math.abs(v)/2; i++){
            a.push(k);
        }
    }
    
    a.sort((a, b)=>a-b);
    // console.log(mn, a.length, a);
    
    let ans=0;
    for(let i=0; i<Math.floor(a.length/2); i++){
        ans+=Math.min(2*mn, a[i]);
        
    }
    return ans;
};