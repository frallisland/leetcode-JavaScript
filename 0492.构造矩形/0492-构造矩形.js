/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let res=[area, 1];
    for(let i=2; i<=Math.sqrt(area); i++){
        if(area%i===0){
            res=[Math.floor(area/i), i];
        }
    }
    return res;
};