/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let recs=[1]
    let [idx3, idx5, idx7]=[0, 0, 0]

    while(recs.length<k){
        let num3=recs[idx3]*3
        let num5=recs[idx5]*5
        let num7=recs[idx7]*7

        let x=Math.min(num3, num5, num7)
        recs.push(x)
        if(x===num3) idx3++;
        if(x===num5) idx5++;
        if(x===num7) idx7++; 
    }
    return recs[k-1]
};