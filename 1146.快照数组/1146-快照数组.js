/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.map=new Array(length).fill(0).map(_=>new Array());
    for(let i=0; i<length; i++){
        this.map[i].push([0, 0]);
    }
    this.snap_id=0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    // 同一个snap中多次修改
    let arr=this.map[index];
    if(!arr.length || arr[arr.length-1][0]<this.snap_id){
        arr.push([this.snap_id, val]);
    }else if(arr[arr.length-1][0]===this.snap_id){
        arr[arr.length-1]=[this.snap_id, val];
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    // 有可能不存在
    let arr=this.map[index];
    if(arr.length===0) return 0;
    if(arr[arr.length-1][0]<=snap_id) return arr[arr.length-1][1];
    
    // console.log(arr);

    let left=0, right=arr.length-1;
    while(left<right){
        let mid=Math.floor((left+right+1)/2);
        if(arr[mid][0]>snap_id){
            right=mid-1;
        }else{
            left=mid;
        }
    }
    return arr[right][1];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */