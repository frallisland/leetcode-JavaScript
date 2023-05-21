/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
    let pre=0, cnt=1;
    let res=0, acc=0, res_cnt=-1;

    for(let customer of customers){
        pre+=customer;
        let upper=Math.min(pre, 4);
        acc+=upper;

        let temp=acc*boardingCost-runningCost*cnt;
        if(temp>res){
            res=temp;
            res_cnt=cnt;
        }

        pre-=upper;
        cnt++;
    }

    while(pre){
        let upper=Math.min(pre, 4);
        acc+=upper;

        let temp=acc*boardingCost-runningCost*cnt;
        if(temp>res){
            res=temp;
            res_cnt=cnt;
        }

        pre-=upper;
        cnt++;
    }
    return res_cnt;
};