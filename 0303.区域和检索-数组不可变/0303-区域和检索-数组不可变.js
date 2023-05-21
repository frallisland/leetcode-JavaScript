/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.pre=new Array(nums.length+1).fill(0);
    for(let i=1; i<=nums.length; i++){
        this.pre[i]=this.pre[i-1]+nums[i-1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.pre[right+1]-this.pre[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */