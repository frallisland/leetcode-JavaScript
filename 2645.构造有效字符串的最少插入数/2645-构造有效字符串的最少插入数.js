/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let ans=0;
    const n=word.length;
    
    for(let i=0; i<n;){
        // console.log(i, ans)
        if(word[i]==='a'){
            if(i+1<n && word[i+1]==='b' && i+2<n && word[i+2]==='c'){
                i+=3;
            }else if((i+1<n && word[i+1]==='b') || (i+1<n && word[i+1]==='c')){
                i+=2;
                ans++;
            }else{
                i++;
                ans+=2;
            }
        }else if(word[i]==='b' && i+1<n && word[i+1]=='c'){
            ans++;
            i+=2;
        }else{
            ans+=2;
            i++;
        }
    }
    return ans;
};