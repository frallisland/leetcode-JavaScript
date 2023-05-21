/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pre=[1];
    for(let i=1; i<=rowIndex; i++){
        let tmp=[];
        for(let j=0; j<=i; j++){
            if(j===0 || j===i){
                tmp.push(1);
            }else{
                tmp.push(pre[j-1]+pre[j]);
            }
        }
        pre=tmp;
    }
    return pre;
};