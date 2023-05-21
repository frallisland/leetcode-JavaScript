/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const ss=s.split(''), ords=new Array(26).fill(26);
    for(let i=0; i<order.length; i++){
        let index=order[i].charCodeAt()-'a'.charCodeAt();
        ords[index]=i;
    }
    ss.sort((a, b)=>{
        let ia=a.charCodeAt()-'a'.charCodeAt(), ib=b.charCodeAt()-'a'.charCodeAt();
        return ords[ia]-ords[ib];
    })
    return ss.join('');
};