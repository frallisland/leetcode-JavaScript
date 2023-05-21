/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    // 当起始位置和终点位置相同时返回true
    let dirs=[[0, 1], [1, 0], [0, -1], [-1, 0]]
    function changeDire(cur, flag){
        if(flag==='R') return (cur+1)%4
        else return (cur-1+4)%4
    }

    let dir=0
    let x=0, y=0
    for(let ch of instructions){
        if(ch==='G'){
            x=x+dirs[dir][0]
            y=y+dirs[dir][1]
        }else{
            dir=changeDire(dir, ch)
        }
        console.log(x, y)
    }
    return dir!==0 || x===0 && y===0 
};