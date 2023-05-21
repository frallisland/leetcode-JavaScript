/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const n=secret.length;
    let cnt=new Array(10).fill(0);
    let visit=new Array(n).fill(0);
    for(let i=0; i<n; i++){
        let index=secret[i].charCodeAt()-'0'.charCodeAt();
        cnt[index]++;
    }

    let cntA=0, cntB=0;
    for(let i=0; i<n; i++){
        if(guess[i]===secret[i]){
            cntA++;
            visit[i]=1;
            let index=secret[i].charCodeAt()-'0'.charCodeAt();
            cnt[index]--;
        }
    }
    for(let i=0; i<n; i++){
        if(visit[i]) continue;
        let index=guess[i].charCodeAt()-'0'.charCodeAt();
        if(cnt[index]){
            cntB++;
            cnt[index]--;
        }
    }
    return cntA+'A'+cntB+'B';
};