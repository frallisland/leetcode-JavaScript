var MyQueue = function() {
    this.stk1=[];
    this.stk2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stk1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(!this.stk2.length){
        while(this.stk1.length){
            this.stk2.push(this.stk1.pop());
        }
    }
    return this.stk2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.stk2.length){
        while(this.stk1.length){
            this.stk2.push(this.stk1.pop());
        }
    }
    return this.stk2[this.stk2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stk1.length+this.stk2.length===0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */