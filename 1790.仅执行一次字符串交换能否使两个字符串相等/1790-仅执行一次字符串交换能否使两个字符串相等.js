/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let cnt=new Array(26).fill(0);
    let dif=0;
    for(let i=0; i<s1.length; i++){
        let a=s1[i], b=s2[i];
        cnt[(a.charCodeAt()-'a'.charCodeAt())]++;
        cnt[(b.charCodeAt()-'a'.charCodeAt())]--;

        if(a!==b) dif++;
    }
    for(let num of cnt){
        if(num){
            return false;
        }
    }
    return dif===2 || dif===0;
};