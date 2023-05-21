class Solution {
public:
    long long minOperations(vector<int>& nums1, vector<int>& nums2, int k) {
        long long add=0, dec=0;
        int n=size(nums1);
        
        for(int i=0; i<n; i++){
            int delta=abs(nums1[i]-nums2[i]);
            if(delta==0) continue;
            if((k==0 && delta!=0) || delta%k!=0) return -1;
            
            if(nums1[i]>nums2[i]){
                dec+=delta/k;
            }else if(nums1[i]<nums2[i]){
                add+=delta/k;
            }
        }
        return add==dec?add:-1;
    }
};