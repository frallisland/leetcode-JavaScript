/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var kSimilarity = function(s1, s2) {
    const n=s1.length;
    const queue=[];
    const visit=new Set();
    
    queue.push([s1, 0]);
    visit.add(s1);

    let step=0;
    while(queue.length){
        const sz=queue.length;
        for(let i=0; i<sz; i++){
            let [cur, pos]=queue.shift();
            if(cur===s2){
                return step;
            }

            while(pos<n && cur[pos]===s2[pos]){
                pos++;
            }
            for(let j=pos+1; j<n; j++){
                if(s2[j]===cur[j]) continue;
                if(s2[pos]===cur[j]){
                    const next=swap(cur, pos, j);
                    if(!visit.has(next)){
                        visit.add(next);
                        queue.push([next, pos+1]);
                    }
                }
            }
        }
        step++;
    }
    return step;
};

let swap=(cur, i, j)=>{
    const arr=[...cur];
    [arr[i], arr[j]]=[arr[j], arr[i]];
    return arr.join('');
}