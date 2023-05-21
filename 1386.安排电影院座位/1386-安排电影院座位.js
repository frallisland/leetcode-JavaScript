/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let left=parseInt("11110000",2);
    let midd=parseInt("11000011",2);
    let right=parseInt("00001111",2);

    let mp=new Map();
    let cnt=0;
    for(let [r, c] of reservedSeats){
        if(c>=2 && c<=9){
            if(!mp.has(r)){
                mp.set(r, 0);
                cnt++;
            }
            mp.set(r, mp.get(r) | (1<<(c-2)));
        }
    }

    let ans=(n-cnt)*2;
    for(let [r, bm] of mp.entries()){
        if(((bm|left)===left) || ((bm|right)===right) || ((bm|midd)===midd)){
            ans++;
        }
    }
    return ans;
};