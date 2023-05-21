/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let l=0, r=numbers.length-1;
    while(l<r){
        let m=Math.floor((l+r)/2);
        if(numbers[r]>numbers[m]) r=m;
        else if(numbers[r]<numbers[m]) l=m+1;
        else r--;
    }
    return numbers[l];
};