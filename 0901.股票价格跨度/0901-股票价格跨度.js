var StockSpanner = function() {
    this.arr=[];
    this.stk=[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    if(this.stk.length===0){
        this.arr.push(price);
        this.stk.push(this.arr.length-1);
        return 1;
    }
    this.arr.push(price);
    let curIndex=this.arr.length-1, ans=1;
    while(this.stk.length && this.arr[this.stk[this.stk.length-1]]<=price){
        ans=Math.max(ans, curIndex-this.stk[this.stk.length-1]+1);
        let temp=this.stk.pop();;
        if(this.arr[this.stk[temp]]===price) break;
    }

    if(this.stk.length===0 || this.arr[this.stk[this.stk.length-1]]>price){
        let left=this.stk.length===0?0:(this.stk[this.stk.length-1]+1);
        ans=Math.max(ans, curIndex-left+1);
        this.stk.push(curIndex);
    }
    return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */