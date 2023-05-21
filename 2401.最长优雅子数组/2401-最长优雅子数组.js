/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    const n=nums.length;
    if(n===1) return nums.length;
    
    function getDigit(num){
        let idx=0;
        let st=new Set();
        while(num){
            if(num&1){
                st.add(idx);
            }
            idx++;
            num>>=1;
        }
        return st;
    }
    
    let ans=1;
    for(let i=0; i<n; i++){
        let cur=getDigit(nums[i]);
        let flag=false;
        
        let j=i+1;
        for(; j<n; j++){
            let tmp=nums[j];
            let idx=0;
            while(tmp){
                if(tmp&1){
                    if(cur.has(idx)){
                        flag=true;
                        ans=Math.max(ans, j-i);
                        break;
                    }else{
                        cur.add(idx);
                    }
                    
                }
                tmp>>=1;
                idx++;
            }

            if(flag) break;
        }
        if(j===n && !flag){
            ans=Math.max(ans, j-i);
        }

    }
    return ans;
};