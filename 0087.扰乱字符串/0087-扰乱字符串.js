let cache, s1, s2;

function dfs(i, j, len){
    if(cache[i][j][len]!==0){
        return cache[i][j][len]==1;
    }

    let a=s1.substring(i, i+len), b=s2.substring(j, j+len)
    if(a===b){
        return cache[i][j][len]=1;
    }

    if(!check(a, b)){
        return cache[i][j][len]=-1 && false;
    }

    for(let k=1; k<len; k++){
        if(dfs(i, j, k) && dfs(i+k, j+k, len-k)){
            return cache[i][j][len]=1;
        }
        if(dfs(i, j+len-k, k) && dfs(i+k, j, len-k)){
            return cache[i][j][len]=1;
        }
    }
    cache[i][j][len]=-1;
    return false;
}

function check(s1, s2){
    if(s1.length!==s2.length) return false
    let cnt1=new Array(26).fill(0)
    let cnt2=new Array(26).fill(0)
    for(let i=0; i<s1.length; i++){
        cnt1[s1[i].charCodeAt()-'a'.charCodeAt()]++
        cnt2[s2[i].charCodeAt()-'a'.charCodeAt()]++
    }

    for(let i=0; i<26; i++){
        if(cnt1[i]!==cnt2[i]){
            return false;
        }
    }
    return true
}

var isScramble = function(_s1, _s2) {
    if(_s1===_s2) return true
    if(_s1.length!==_s2.length) return false
    s1=_s1, s2=_s2

    const n=_s1.length
    cache=new Array(n).fill(0).map(x=>new Array(n).fill(0).map(x=>new Array(n+1).fill(0)))
    return dfs(0, 0, n)
};
