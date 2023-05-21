var CQueue = function() {
    this.stk1=[],this.stk2=[];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stk2.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stk1.length) return this.stk1.pop();
    while(this.stk2.length){
        this.stk1.push(this.stk2.pop());
    }
    if(this.stk1.length) return this.stk1.pop();
    return -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */