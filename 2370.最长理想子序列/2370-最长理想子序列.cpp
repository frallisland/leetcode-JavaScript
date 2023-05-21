class Solution {
public:
    int longestIdealString(string s, int k) {
        int sn=s.length();
        vector<int> chs(26, 0);
        chs[s[0]-'a']=1;
        
        for(int i=1; i<sn; i++){
            int idx=s[i]-'a';
            int low=idx-k>=0?idx-k:0, high=idx+k>25?25:idx+k;
            int mx=0;
            for(int j=low; j<=high; j++){
                mx=max(chs[j], mx);
            }
            // cout<<low<<" "<<high<<" "<<mx<<endl;
            chs[idx]=mx+1;
        }
        return *max_element(chs.begin(), chs.end());
    }
};