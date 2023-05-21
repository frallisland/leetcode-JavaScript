/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pat) {
    const pn=pat.length;
    let ans=[];
    let vis=new Array(10).fill(0);
    
    let backtrack=function(path, idx){
        if(path.length===pn+1){
            ans.push(path.join(''));
            return;
        }
        
        let back=path.length-1;
        if(pat[idx]==='I'){
            for(let i=path[back]+1; i<=9; i++){
                if(vis[i]) continue;
                path.push(i);
                vis[i]=1;
                backtrack(path, idx+1);
                vis[i]=0;
                path.pop();
            }
        }else{
            for(let i=path[back]-1; i>=1; i--){
                if(vis[i]) continue;
                path.push(i);
                vis[i]=1;
                backtrack(path, idx+1);
                vis[i]=0;
                path.pop();
            }
        }
    }
    
    for(let i=1; i<=9; i++){
        vis[i]=1;
        backtrack([i], 0);
        vis[i]=0;
    }
    ans.sort();
    return ans[0];
};