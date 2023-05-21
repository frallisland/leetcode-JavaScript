/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    let judgeRowCol=(idx, rc)=>{
        let visit=0;
        for(let i=0;i<9;i++){
            let k;
            if(rc){
                if(board[idx][i]==='.') continue;
                k=parseInt(board[idx][i]);
            }else{
                if(board[i][idx]==='.') continue;
                k=parseInt(board[i][idx]);
            }
            if((1<<k)&visit) return false;
            visit^=(1<<k);
        }
        return true;
    }

    let judgeRec=(sx, sy)=>{
        let visit=0;
        for(let i=sx; i<sx+3; i++){
            for(let j=sy; j<sy+3; j++){
                if(board[i][j]==='.') continue;
                let k=parseInt(board[i][j]);
                if((1<<k)&visit) return false;
                visit^=(1<<k);
            }
        }
        return true;
    }

    for(let i=0; i<9; i++)
        if(!judgeRowCol(i, true) || !judgeRowCol(i, false))
            return false;

    for(let sx=0; sx<9; sx+=3)
        for(let sy=0; sy<9; sy+=3)
            if(!judgeRec(sx, sy))
                return false;
    return true;
};