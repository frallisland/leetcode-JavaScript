class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_set<char> st;
        int ans=0;

        for(int l=0, r=0; r<s.length(); ){
            char ch=s[r];
            if(!st.count(ch)){
                ans=max(ans, r-l+1);
                st.insert(ch);
                r++;
            }else{
                while(st.count(ch)){
                    st.erase(s[l]);
                    l++;
                }
            }
        }
        return ans;
    }
};