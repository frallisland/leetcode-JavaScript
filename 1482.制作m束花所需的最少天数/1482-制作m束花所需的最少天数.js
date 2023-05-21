/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let l = 0, r = _.max(bloomDay), ans = Infinity;

    function check(mid){
        let pre=0, cnt=0;
        for(let i=0; i<bloomDay.length; i++){
            if(pre>=k)  cnt++, pre=0;
            
            if(bloomDay[i]<=mid){
                pre++;
            }else{
                pre=0;
            }
        }
        if(pre>=k) cnt++;
        // console.log(cnt, mid);
        return cnt>=m;
    }

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (check(m)) {
            r = m - 1;
            ans = m;
        } else {
            l = m + 1;
        }
    }

    return ans===Infinity?-1:ans;
};