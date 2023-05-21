/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coord) {
    let a=coord[0].charCodeAt()-'a'.charCodeAt()+1, b=coord[1].charCodeAt()-'0'.charCodeAt();
    return (a+b)%2===0?false:true;
};