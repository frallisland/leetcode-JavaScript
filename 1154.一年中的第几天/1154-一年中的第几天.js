/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let months=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function isRun(year){
        if(year%100 && year%4===0) return true;
        if(year%400===0) return true;
        return false;
    }
    let [year, month, day]=date.split('-').map(x=>parseInt(x));

    let ans=0;
    for(let i=0; i<month-1; i++){
        ans+=months[i];
        if(i==1 && isRun(year)) ans++;
    }
    ans+=day;
    return ans;
};