/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let st=new Set([...sentence]);
    // console.log(st, st.size)
    return st.size===26;
};