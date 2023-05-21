/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    let [t, m]=time.split(':')
    let acc=1
    
    if(t[0]==='?'){
        if(t[1]!=='?'){
            if(t[1].charCodeAt(0)<'4'.charCodeAt(0)){
                acc*=3
            }else{
                acc*=2
            }
        }else{
            acc*=24
        }
    }else{
        if(t[1]==='?'){
            if(t[0].charCodeAt(0)<='1'.charCodeAt(0)){
                acc*=10
            }else{
                acc*=4
            }
        }
    }

    if(m[0]==='?'){
        acc*=6
        if(m[1]==='?') acc*=10
    }else{
        if(m[1]==='?'){
            acc*=10
        }
    }
    return acc
};