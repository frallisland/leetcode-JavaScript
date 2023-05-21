/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
    return function curried(...args0) {
        if(fn.length===args0.length){
            return fn.apply(null, args0)
        }else{
            return function(...args1){
                return curried.apply(null, [...args0, ...args1])
            }
        }
    };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */