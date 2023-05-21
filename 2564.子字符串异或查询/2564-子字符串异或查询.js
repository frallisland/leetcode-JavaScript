/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function(s, queries) {
    const n=s.length;
    
    let ans=[];
    for(let [fi, se] of queries){
        let tar=fi^se;
        let strTar=tar.toString(2);
        
        let start=s.indexOf(strTar);
        if(start!==-1){
            end=start+strTar.length-1;
            ans.push([start, end]);
        }else{
            ans.push([-1, -1]);
        }
    }
    
    return ans;
};