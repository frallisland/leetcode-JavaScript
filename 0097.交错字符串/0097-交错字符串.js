/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const [n1, n2, n3]=[s1.length, s2.length, s3.length];
    
    if(n1+n2!==n3) return false;

    let f=new Array(n1+1).fill(0).map(x=>new Array(n2+1).fill(0));
    f[0][0]=1;
    for(let i=0; i<=n1; i++){
        for(let j=0; j<=n2; j++){
            let p=i+j-1;
            if(i>0){
                f[i][j]|=(f[i-1][j] && s1[i-1]===s3[p]);
            }
            if(j>0){
                f[i][j]|=(f[i][j-1] && s2[j-1]===s3[p]);
            }
        }
    }
    return f[n1][n2];
};