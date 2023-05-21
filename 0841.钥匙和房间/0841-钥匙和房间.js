/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n=rooms.length;
    let visit=new Array(n).fill(0);
    let q=[0];
    visit[0]=1;
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let x=q.shift();
            for(let y of rooms[x]){
                if(!visit[y]){
                    q.push(y);
                    visit[y]=1;
                }
            }
        }
    }
    return _.sum(visit)===n;
};