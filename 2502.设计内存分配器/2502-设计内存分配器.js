/**
 * @param {number} n
 */
var Allocator = function(n) {
    this.arr=new Array(n).fill(0);
    // this.stIdx=0;
    this.len=n;
};

/** 
 * @param {number} size 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.allocate = function(size, mID) {
    let st=-1, sp=0;
    for(let i=0; i<this.len; i++){
        
        if(!sp && this.arr[i]) continue; // 填满的空格
        
        if(!sp && !this.arr[i]){ // 第一个空格
            st=i;
        }
        
        if(!this.arr[i]){
            sp++;
        }
        
        if(sp>=size){
            break;
        }
        
        if(sp && this.arr[i] || i===this.len-1){
            sp=0;
            st=-1;
        }
    }
    
    // if(st!==-1){
    //     console.log(this.arr);
    // }
    for(let i=st; st!==-1 && size; size--, i++){
        this.arr[i]=mID;
    }
    return st;
};

/** 
 * @param {number} mID
 * @return {number}
 */
Allocator.prototype.free = function(mID) {
    let acc=0;
    for(let i=0; i<this.len; i++){
        if(this.arr[i]===mID){
            acc++;
            this.arr[i]=0;
        }
    }
    return acc;
};

/**
 * Your Allocator object will be instantiated and called as such:
 * var obj = new Allocator(n)
 * var param_1 = obj.allocate(size,mID)
 * var param_2 = obj.free(mID)
 */