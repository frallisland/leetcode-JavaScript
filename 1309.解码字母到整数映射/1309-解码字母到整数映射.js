/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const n=s.length;
    let ans='';
    for(let i=0; i<n;){
        if(i+2<n && s[i+2]==='#'){
            let num=parseInt(s.substring(i, i+2))+'a'.charCodeAt()-1;
            let ch=String.fromCharCode(num);
            ans+=ch;
            i+=3;
        }else{
            let num=parseInt(s.substring(i, i+1))+'a'.charCodeAt()-1;
            let ch=String.fromCharCode(num);
            ans+=ch;
            i++;
        }
    }
    return ans;
};