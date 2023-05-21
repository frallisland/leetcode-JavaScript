/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {
    let map=new Map();
    let ans=new Array(rains.length).fill(-1);

    
    for(let i=0; i<rains.length; i++){
        let lake=rains[i];
        if(lake){
            let vals=map.get(lake)||[];
            vals.push(i);
            map.set(lake, vals);
        }
    }

    // console.log(map);

    let pq=new MinPriorityQueue(), set=new Set();

    for(let i=0; i<rains.length; i++){
        const lake=rains[i];

        if(lake===0){
            if(pq.size()){
                const nxt=pq.dequeue().element;
                ans[i]=rains[nxt];
                set.delete(rains[nxt]);
            }else{
                ans[i]=1;
            }
        }else{
            if(set.has(lake)) return [];
            
            ans[i]=-1;
            set.add(lake);
            map.get(lake).shift();
            if(map.get(lake).length){
                pq.enqueue(map.get(lake)[0]);
            }
        }
    }

    return ans;
};