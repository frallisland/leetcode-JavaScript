/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const m=image.length, n=image[0].length;
    let visit=new Array(m).fill(0).map(x=>new Array(n).fill(0))
    function dfs(x, y, t){
        image[x][y]=color;
        visit[x][y]=1;
        for(let [nx, ny] of [[x, y+1], [x+1, y], [x, y-1], [x-1, y]]){
            if(nx>=0 && nx<m && ny>=0 && ny<n && image[nx][ny]===t && !visit[nx][ny]){
                dfs(nx, ny, t);
            }
        }
    }
    dfs(sr, sc, image[sr][sc]);
    return image;
};