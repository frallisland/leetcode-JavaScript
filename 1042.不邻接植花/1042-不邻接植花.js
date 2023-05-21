/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    let ans=new Array(n).fill(0);

    let map=new Array(n).fill(null).map(_=>new Array())

    for(let [a, b] of paths){
        map[a-1].push(b-1)
        map[b-1].push(a-1)
    }

    for(let i=0; i<n; i++){
        let is_one=false, is_two=false, is_three=false;
        if(!map[i].length){
            ans[i]=1
            continue
        }

        for(let a of map[i]){
            if(ans[a]===1) is_one=true;
            else if(ans[a]===2) is_two=true;
            else if(ans[a]===3) is_three=true;
        }
        
        if(!is_one) ans[i]=1;
        else if(!is_two) ans[i]=2;
        else if(!is_three) ans[i]=3;
        else ans[i]=4;
    }
    return ans;
};