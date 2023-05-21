/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let arr=num.toString().split('');
    const len=arr.length;

    let num_min=100000010, num_max=0;
    for(let i=0; i<=9; i++){
        for(let j=0; j<=9; j++){
            
            let t=num.toString().split('');
            
            for(let k=0; k<len; k++){
                if(parseInt(t[k])===i){
                    t[k]=j.toString();
                }
            }
            
            let str=t.join('');
            // console.log(str);
            num_min=Math.min(num_min, parseInt(str));
            num_max=Math.max(num_max, parseInt(str));
        }
    }
    // console.log(arr)
    return num_max-num_min;
};