/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let dirs=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];
    function getNum(x, y, m, n){
        let ans=0;
        for(let i=0; i<8; i++){
            let curX=x+dirs[i][0], curY=y+dirs[i][1];
            if(curX>=0 && curX<m && curY>=0 && curY<n){
                if(board[curX][curY]){
                    ans++;
                }
            }
        }
        return ans;
    }

    const m=board.length, n=board[0].length;
    let ans=[];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let cnt=getNum(i, j, m, n);
            if(board[i][j]===0 && cnt===3){
                ans.push([i, j]);
            }else if(board[i][j]===1 && (cnt<2 || cnt>3)){
                ans.push([i, j]);
            }
        }
    }
    for(let [i, j] of ans){
        board[i][j]^=1;
    }
};