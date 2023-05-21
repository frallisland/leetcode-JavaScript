/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let dist=Infinity, idx=-1;
    for(let i=0; i<points.length; i++){
        let xx=points[i][0], yy=points[i][1];
        if(xx===x || yy===y){
            let tt=Math.abs(xx-x)+Math.abs(yy-y);
            if(tt<dist){
                idx=i;
                dist=tt;
            }
        }
    }
    return dist===Infinity?-1:idx;
};