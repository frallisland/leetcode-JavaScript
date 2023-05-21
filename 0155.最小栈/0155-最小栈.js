var MinStack = function() {
    this.minStk=[];
    this.stk=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stk.push(val);
    if(this.minStk.length===0 || this.minStk[this.minStk.length-1]>=val){
        this.minStk.push(val);
    }else{
        this.minStk.push(this.getMin());
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top=this.top();
    this.stk.pop();
    this.minStk.pop();
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk[this.stk.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStk[this.minStk.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */