/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    let ans=new Array(queries.length).fill(0);
    let idx=0;
    for(let [x, y, r] of queries){
        let cnt=0;
        for(let [x1, y1] of points){
            x1=Math.abs(x1-x), y1=Math.abs(y1-y);
            if(x1*x1+y1*y1<=r*r) cnt++;
        }
        ans[idx]=cnt;
        idx++;
    }
    return ans;
};