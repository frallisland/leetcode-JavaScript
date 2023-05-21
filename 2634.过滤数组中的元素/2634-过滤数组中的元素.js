/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    return  arr.reduce((pv, cv, ci)=>{
        if(fn(cv, ci)) pv.push(cv)
        return pv
    }, [])
};