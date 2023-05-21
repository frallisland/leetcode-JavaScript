/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    let buys=new MaxPriorityQueue({priority:(el)=>el[0]}), sells=new MinPriorityQueue({priority:(el)=>el[0]});

    for(let [p, a, t] of orders){
        if(t===0){
            while(sells.size() && sells.front().element[0]<=p && a){
                let [sp, sa]=sells.front().element;
                [a, sa]=[Math.max(0, a-sa), Math.max(0, sa-a)]
                sells.dequeue();
                if(sa) sells.enqueue([sp, sa]);
            }
            if(a) buys.enqueue([p, a]);
        }else{
            while(buys.size() && buys.front().element[0]>=p && a){
                let [bp, ba]=buys.front().element;
                [a, ba]=[Math.max(0, a-ba), Math.max(0, ba-a)];
                buys.dequeue();
                if(ba) buys.enqueue([bp, ba]);
            }
            if(a) sells.enqueue([p, a]);            
        }
    }

    const MOD=1000000007;
    let ans=0;
    for(let obj of buys.toArray()){
        let [_, a]=obj.element;
        ans=(ans+a)%MOD;
    }
    for(let obj of sells.toArray()){
        let [_, a]=obj.element;
        ans=(ans+a)%MOD;
    }
    return ans;
};