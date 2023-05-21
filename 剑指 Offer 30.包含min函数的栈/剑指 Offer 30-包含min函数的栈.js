/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stk=[], this.minStk=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.minStk.length && this.minStk[this.minStk.length-1]<x){
        this.minStk.push(this.minStk[this.minStk.length-1]);
    }else{
        this.minStk.push(x);
    }
    this.stk.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // ¿ÉÄÜÕ»¿Õ
    this.stk.pop();
    this.minStk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stk.length===0?-1:this.stk[this.stk.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.minStk.length===0?-1:this.minStk[this.minStk.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */