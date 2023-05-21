/**
 * @param {number} n
 * @return {number}
 */
function isPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}

function findNext(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0 && isPrime(i)){
            return i;
        }
    }
    return n;
}

var smallestValue = function(n) {
    if(isPrime(n) || n==4) return n;


    let acc=0, pre=0;
    while(n!==1){
        pre=findNext(n);
        acc+=pre;
        n=Math.floor(n/pre);
        console.log(n);
    }

    return smallestValue(acc);
};