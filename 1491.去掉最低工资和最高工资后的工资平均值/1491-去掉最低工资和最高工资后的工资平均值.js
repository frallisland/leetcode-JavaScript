/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let _sum=0;
    salary.sort((a, b)=>a-b);
    for(let i=1; i<salary.length-1; i++){
        _sum+=salary[i];
    }
    return _sum/(salary.length-2);
};