var BSTIterator = function(root) {
    this.cur = root;
    this.stack = [];
};

BSTIterator.prototype.next = function() {
    while (this.cur) {
        this.stack.push(this.cur);
        this.cur = this.cur.left;
    }
    this.cur = this.stack.pop();
    const ret = this.cur.val;
    this.cur = this.cur.right;
    return ret;
};

BSTIterator.prototype.hasNext = function() {
    return this.cur !== null || this.stack.length;
};