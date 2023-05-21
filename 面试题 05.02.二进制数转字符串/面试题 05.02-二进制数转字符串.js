/**
 * @param {number} num
 * @return {string}
 */
var printBin = function(num) {
    let res=[];
    let val=0.5;
    while(num && res.length<30){
        if(num>=val) num-=val, res.push(1);
        else res.push(0);
        val/=2;
    }
    if(num) return 'ERROR';
    return '0.'+res.join('');
};