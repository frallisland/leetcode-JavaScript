/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.split(' ');
    for(let i=0; i<arr.length; i++){
        let t=arr[i].split('');
        arr[i]=t.reverse().join('');
    }
    return arr.join(' ');
};