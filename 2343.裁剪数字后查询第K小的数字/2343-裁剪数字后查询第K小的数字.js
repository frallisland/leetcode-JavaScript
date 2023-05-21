/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, qs) {
    const n=qs.length;
    let ans=[];
    let wLen=nums[0].length;
    for(let i=0; i<n; i++){
        let [k, t]=qs[i];
        let tmp=[];
        for(let j=0; j<nums.length; j++){
            tmp.push([nums[j].substring(wLen-t), j]);
        }
        tmp.sort((a, b)=>{
            for(let i=0; i<t; i++){
                if(a[0][i].charCodeAt()-b[0][i].charCodeAt()<0) return -1;
                else if(a[0][i].charCodeAt()-b[0][i].charCodeAt()>0) return 1;
            }
            return a[1]-b[1];
        })
        ans.push(tmp[k-1][1]);
        // console.log(tmp);
    }
    // console.log(wLen);
    return ans;
};