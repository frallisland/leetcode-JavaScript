/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    if(deadends.includes('0000')) return -1;
    let q=['0000'], step=0, visit=new Set();
    visit.add('0000');

    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let x=q.shift();
            // console.log(x);
            if(x===target) return step;

            let arr=x.split('').map(v=>parseInt(v));
            for(let j=0; j<x.length; j++){
                let t=arr[j];
                arr[j]=(t+1+10)%10;
                let next=arr.join('');
                if(!visit.has(next) && !deadends.includes(next)){
                    q.push(next);
                    visit.add(next);
                }
                
                arr[j]=(t-1+10)%10;
                let pre=arr.join('');
                if(!visit.has(pre) && !deadends.includes(pre)){
                    q.push(pre);
                    visit.add(pre);
                }

                arr[j]=t;
            }
        }
        step++;
    }
    return -1;
};