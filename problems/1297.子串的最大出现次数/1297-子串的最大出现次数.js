/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let mp=new Map(), ans=0;

    let isExist=function(substr){
        if(!mp.has(substr)) return false;
        let st=new Set();
        for(let i=0; i<substr.length; i++){
            st.add(substr[i]);
        }
        return st.size<=maxLetters?true:false;
    }

    for(let i=0; i<=s.length-minSize; i++){
        let substr=s.substring(i, i+minSize);
        if(isExist(substr)){
            let val=mp.get(substr);
            ans=Math.max(val+1, ans);
            mp.set(substr, val+1);
        }else{
            mp.set(substr, 1);
            if(isExist(substr)) ans=Math.max(ans, 1);
        }
    }
    return ans;
};