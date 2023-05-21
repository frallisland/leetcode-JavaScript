function lastSubstring(s: string): string {
    const n:number=s.length;
    let i:number=0, j:number=1;
    while(j<n){
        let  k:number=0;
        while(j+k<n && s[i+k]===s[j+k]){
            k++;
        }
        if(j+k<n && s[i+k]<s[j+k]){
            let t:number=i;
            i=j;
            j=Math.max(j+1, t+k+1);
        }else{
            j=j+k+1;
        }
    }
    return s.substring(i, n)
};