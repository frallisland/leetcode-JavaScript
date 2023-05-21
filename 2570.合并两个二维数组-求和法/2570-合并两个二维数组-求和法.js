/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const l1=nums1.length, l2=nums2.length
    
    let i=0, j=0
    let ans=[]
    
    while(i<l1 && j<l2){
        if(nums1[i][0]<=nums2[j][0]){
            ans.push([...nums1[i]]), i++;
        }else{
            let back=ans.length-1
            if(back===-1) ans.push([...nums2[j]])
            else if(ans[back][0]===nums2[j][0]){
                ans[back][1]+=nums2[j][1]
            }else{
                ans.push([...nums2[j]]);
            }
            j++
        }
    }
    
    while(i<l1){
        let back=ans.length-1
        if(ans[back][0]===nums1[i][0]){
            ans[back][1]+=nums1[i][1]
        }else{
            ans.push([...nums1[i]]);
        }
        i++
    }
    while(j<l2){
        let back=ans.length-1
        if(ans[back][0]===nums2[j][0]){
            ans[back][1]+=nums2[j][1]
        }else{
            ans.push([...nums2[j]]);
        }
        j++
    }
    return ans
};