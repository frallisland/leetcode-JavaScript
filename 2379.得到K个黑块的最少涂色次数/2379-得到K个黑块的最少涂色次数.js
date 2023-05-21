/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let w=0, res=k;
    for(let i=0; i<k; i++){
        if(blocks[i]==='W') w++;
    }

    res=Math.min(res, w);

    for(let r=k, l=0; r<blocks.length; l++, r++){
        if(blocks[l]==='W') w--;
        if(blocks[r]==='W') w++;
        res=Math.min(res, w);
    }
    return res;
};