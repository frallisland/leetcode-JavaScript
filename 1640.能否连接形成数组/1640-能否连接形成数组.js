/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const m=arr.length;
    pieces.sort((a, b)=>{
        return arr.indexOf(a[0])-arr.indexOf(b[0]);
    });

    function myFlat(arr){
        return arr.reduce((prev, curr)=>{
            if(Array.isArray(curr)){
                prev.push(...myFlat(curr))
            }else{
                prev.push(curr);
            }
            return prev;
        }, [])
    }
    let tmp=myFlat(pieces);
    for(let i=0; i<m; i++){
        if(tmp[i]!==arr[i]){
            return false;
        }
    }
    return true;
};