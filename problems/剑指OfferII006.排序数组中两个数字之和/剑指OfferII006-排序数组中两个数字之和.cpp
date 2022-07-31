class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int l=0, r=numbers.size()-1;
        int sum;
        while(l<r){
            sum=numbers[l]+numbers[r];
            if(sum==target) return vector<int>{l, r};
            else if(sum<target) l++;
            else r--;
        }
        return vector<int>(2, -1);
    }
};