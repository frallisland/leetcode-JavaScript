/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.w=w;
    for(let i=1; i<w.length; i++){
        this.w[i]+=this.w[i-1];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let idx=Math.floor(Math.random()*this.w[this.w.length-1]);
    // 第一个 大于 idx 的值
    let l=0, r=this.w.length-1;
    while(l<r){
        let mid=Math.floor((l+r)/2);
        if(this.w[mid]<=idx){
            l=mid+1;
        }else{
            r=mid;
        }
    }
    return l;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */