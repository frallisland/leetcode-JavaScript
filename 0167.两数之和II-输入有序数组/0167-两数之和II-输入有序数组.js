/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let l=0, r=numbers.length-1; l<r; ){
        if(numbers[l]+numbers[r]===target){
            return [l+1, r+1];
        }else if(numbers[l]+numbers[r]<target){
            l++;
        }else{
            r--;
        }
    }
    return [-1, -1];
};