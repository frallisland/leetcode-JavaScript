/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m=grid.length, n=grid[0].length;
    let q=[], cnt=0, ors=0;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]){
                ors++;
                if(grid[i][j]===2){
                    q.push([i, j]);
                    cnt++;
                }
            }
        }
    }

    if(cnt===ors) return 0;
    let step=-1;
    while(q.length){
        const l=q.length;
        for(let i=0; i<l; i++){
            let [x, y]=q.shift();
            for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
                if(nx>=0 && nx<m && ny>=0 && ny<n && grid[nx][ny]===1){
                    q.push([nx, ny]);
                    grid[nx][ny]=2;
                    cnt++;
                }
            }
        }
        step++;
    }
    return cnt===ors?step:-1;
};