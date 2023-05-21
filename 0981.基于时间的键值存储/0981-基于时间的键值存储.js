var TimeMap = function() {
    this.times=new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.times.has(key)){
        this.times.get(key).push([timestamp, value]);
    }else{
        this.times.set(key, [[timestamp, value]]);
    }
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.times.has(key)) return '';

    
    // 二分查找第一个小于等于 timestamp 的结果
    let ts=this.times.get(key);
    // console.log(ts);
    if(timestamp<ts[0][0]) return '';

    let left=0, right=ts.length-1;
    while(left<right){
        let mid=Math.floor((left+right+1)/2);
        if(ts[mid][0]>timestamp){
            right=mid-1;
        }else{
            left=mid;
        }
    }
    return ts[right][1];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */