/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let visited=new Array(n).fill(0)
    
    let cur=0, cnt=1
    while(!visited[cur]){
        visited[cur]=1
        cur=(cur+k*cnt)%n
        cnt++
    }
    
    let ans=[]
    for(let i=0; i<n; i++){
        if(visited[i]===0){
            ans.push(i+1)
        }
    }
    return ans
};