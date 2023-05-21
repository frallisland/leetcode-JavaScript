/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    let acc=_.sum(nums);
    let dif=Math.abs(acc-goal);
    return Math.floor(dif/limit)+(dif%limit?1:0);
};