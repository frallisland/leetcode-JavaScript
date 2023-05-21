/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function(timeToLive) {
    this.timeToLive=timeToLive;
    this.map=new Map();
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function(tokenId, currentTime) {
    this.map.set(tokenId, currentTime+this.timeToLive);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function(tokenId, currentTime) {
    if(this.map.has(tokenId) && this.map.get(tokenId)>currentTime){
        this.map.set(tokenId, currentTime+this.timeToLive);
    }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function(currentTime) {
    let ans=0;
    for(let [_, expire] of this.map){
        if(expire>currentTime) ans++;
    }
    return ans;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */