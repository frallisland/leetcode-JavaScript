/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(g) {
    const n=g.length;
    let color=new Array(n).fill(0);

    function bfs(i){
        let q=[i], curColor=1;
        color[i]=curColor;

        while(q.length){
            const l=q.length;
            for(let i=0; i<l; i++){
                let x=q.shift();
                for(let y of g[x]){
                    if(!color[y]){
                        color[y]=curColor^3;
                        q.push(y);
                    }else if(color[y] && color[y]===color[x]){
                        return false;
                    }
                }
            }
            curColor^=3;
        }
        return true;
    }
    for(let i=0; i<n; i++){
        if(!color[i]  && !bfs(i)){
            return false;
        }
    }
    return true;
};