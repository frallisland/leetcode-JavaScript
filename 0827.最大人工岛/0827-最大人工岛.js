/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const m = grid.length, n = grid[0].length;
    let set = new Set();
    let count = 0;
    let maxArea = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++) {
            if(!grid[i][j]){
                count = 0;
                grid[i][j] = 1;
                maxArea = Math.max(maxArea, dfs(i,j));
                grid[i][j] = 0;
                set = new Set();
            }
        }
    }
    function dfs(x, y) {
        if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0 || set.has(x*m+y+1)) {
            return 0
        }
        set.add(x*m+y+1);
        count++;
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);
        return count
    }

    return maxArea === 0 ? m*n : maxArea;
};