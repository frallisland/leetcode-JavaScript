/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    const N=1000010;
    let primes=new Array(N).fill(0), cnt=0;
    let st=new Array(N).fill(false);
    
    function getPrimes(n){
        for(let i=2; i<=n; i++){
            if(!st[i]) primes[cnt++]=i;
            for(let j=0; primes[j]*i<=n; j++){
                st[primes[j]*i]=true;
                if(i%primes[j]===0) break;
            }
        }
    }
    
    getPrimes(right);
    
    function lowerBound(arr, tar) {
      // arr ÓÐÐò¿ÉÖØ¸´
      let l = 0,
        r = cnt - 1;
      if (arr[r] < tar) return r + 1;

      while (l < r) {
        let m = l + ((r - l) >> 1);
        if (arr[m] < tar) {
          l = m + 1;
        } else {
          r = m;
        }
      }
      return l;
    }
    
    let idx=lowerBound(primes, left);
    // console.log(cnt, idx, primes);
    
    let ans=[-1, -1], d=Infinity;
    for(let i=idx; i<cnt-1; i++){
        let td=primes[i+1]-primes[i];
        if(td<d){
            ans=[primes[i], primes[i+1]];
            d=td;
        }
    }
    return ans;
};