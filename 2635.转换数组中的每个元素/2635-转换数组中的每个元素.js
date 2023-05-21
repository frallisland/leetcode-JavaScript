/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.reduce((pv, cv, ci)=>{
        pv.push(fn(cv, ci))
        return pv
    }, [])
};