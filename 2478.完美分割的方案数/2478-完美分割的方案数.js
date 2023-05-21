/**
 * @param {string} s
 * @param {number} k
 * @param {number} minLength
 * @return {number}
 */
var beautifulPartitions = function(s, k, l) {
    const MOD=1000000007, n=s.length;
    function isPrime(c){
        return c==='2' || c==='3' || c==='5' || c==='7';
    }
    function canPartition(j){
        return j===0 || j===n || (!isPrime(s[j-1]) && isPrime(s[j]));
    }
    
    if(k*l>n || !isPrime(s[0]) || isPrime(s[n-1])) return 0;

    let f=new Array(k+1).fill(0).map(_=>new Array(n+1).fill(0));
    f[0][0]=1;
    for(let i=1; i<k+1; i++){
        let sum=0;
        for(let j=i*l; j<n-(k-i)*l+1; j++){
            if(canPartition(j-l)) sum=(sum+f[i-1][j-l]) % MOD;
            if(canPartition(j)) f[i][j]=sum;
        }   
    }
    return f[k][n];
};