/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function(groups, nums) {
    const n=groups.length, m=nums.length;
    let gi=0, ni=0;
    while(ni<m && gi<n){
        if(groups[gi][0]===nums[ni]){
            let flag=true, st=ni, i=0;
            
            for(;i<groups[gi].length && ni<m; i++, ni++){
                if(groups[gi][i]!==nums[ni]){
                    flag=false;
                    break;
                }
            }
            
            if(i!==groups[gi].length){
                flag=false;
            }

            if(!flag){
                ni=st+1;
            }else{
                gi++;
            }
        }else{
            ni++;
        }
    }
    return gi===n;
};