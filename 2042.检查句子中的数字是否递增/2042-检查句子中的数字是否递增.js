/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let arr=s.split(' ');
    let pre=-1;
    for(let w of arr){
        if(!isNaN(w)){
            // console.log(pre, parseInt(w));
            if(parseInt(w)<=pre) return false;
            pre=parseInt(w);
        }
    }
    return true;
};