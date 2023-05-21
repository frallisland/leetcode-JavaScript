
var FrequencyTracker = function() {
    this.num2Cnt=new Map();
    this.cnt2Num=new Map();
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(num) {
    let preCnt=this.num2Cnt.get(num)||0;
    if(preCnt) this.cnt2Num.set(preCnt, this.cnt2Num.get(preCnt)-1);
    
    this.num2Cnt.set(num, preCnt+1);
    this.cnt2Num.set(preCnt+1, (this.cnt2Num.get(preCnt+1)||0)+1);
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    let preCnt=this.num2Cnt.get(number)||0;
    if(preCnt===0) return;
    
    if(preCnt!==1){
        this.cnt2Num.set(preCnt-1, (this.cnt2Num.get(preCnt-1)||0)+1);
    }
    this.cnt2Num.set(preCnt, this.cnt2Num.get(preCnt)-1);
    this.num2Cnt.set(number, preCnt-1);
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(f) {
    let num=this.cnt2Num.get(f)||0;
    // console.log(f, this.num2Cnt, this.cnt2Num);
    return num!==0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */