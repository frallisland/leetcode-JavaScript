/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    factory.sort((a, b)=>a[0]-b[0]);
    robot.sort((a, b)=>a-b);
    let m=robot.length;
    let f=new Array(m).fill(Infinity);
    f.unshift(0);
    for(let [pos, limit] of factory){
        for(let j=m; j>=0; j--){
            let cost=0;
            for(let k=1; k<Math.min(limit, j)+1; k++){
                cost+=Math.abs(robot[j-k]-pos);
                f[j]=Math.min(f[j], f[j-k]+cost);
            }
        }
    }
    return f[m];
};