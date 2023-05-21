/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(mat, e) {
    let q=[e], step=0;
    const m=mat.length, n=mat[0].length;
    mat[e[0]][e[1]]='+';

    while(q.length){
        const sz=q.length;
        for(let i=0; i<sz; i++){
            let [x, y]=q.shift();
            
            for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
                if(nx>=0 && nx<m && ny>=0 && ny<n && mat[nx][ny]==='.'){
                    q.push([nx, ny]);
                    mat[nx][ny]='+';
                    if(nx===0 || ny===0 || nx===m-1 || ny===n-1){
                        return step+1;
                    }
                }
            }
        }
        step++;
    }
    return -1;
};