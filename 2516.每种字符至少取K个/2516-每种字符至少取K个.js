/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const n=s.length;
    let ans=n;
    
    let pre=new Array(3).fill(0).map(_=>new Array(n+1).fill(0)),
        aft=new Array(3).fill(0).map(_=>new Array(n+1).fill(0));
    
    for(let i=0; i<n; i++){
        let idx=s[i].charCodeAt()-'a'.charCodeAt();
        
        for(let t=0; t<3; t++){
            pre[t][i+1]=pre[t][i];
        }   
        pre[idx][i+1]++;
        
    }
    
    for(let j=n-1; j>=0; j--){
        let idx=s[j].charCodeAt()-'a'.charCodeAt();
        for(let t=0; t<3; t++){
            aft[t][j]=aft[t][j+1];
        }
        aft[idx][j]++;
    }


    if((pre[0][0]+aft[0][0])<k || (pre[1][0]+aft[1][0])<k || (pre[2][0]+aft[2][0])<k) return -1;
    
    for(let i=0; i<=n; i++){ // i是左边长度
        let rk1=k-pre[0][i], rk2=k-pre[1][i], rk3=k-pre[2][i];
        let l=i, r=n;
        
        while(l<r){ // 第一个合适的下标
            let m=l+Math.floor((r-l+1)/2);
            if(!(aft[0][m]>=rk1 && aft[1][m]>=rk2 && aft[2][m]>=rk3)){
                r=m-1;
            }else{
                l=m;
            }
        }
        ans=Math.min(ans, i+n-r);
    }
    return ans;
};