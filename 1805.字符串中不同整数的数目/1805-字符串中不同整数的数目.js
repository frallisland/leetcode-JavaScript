/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let nums=[...word.matchAll(/\d+/g)];
    let st=new Set();
    nums.forEach((el)=>{
        let i=0;
        for(; i<el[0].length; i++){
            if(el[0][i]!=='0'){
                break;
            }
        }
        st.add(el[0].slice(i));
    })
    return st.size;
};