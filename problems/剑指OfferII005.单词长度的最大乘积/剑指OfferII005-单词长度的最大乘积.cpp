class Solution {
public:
    int maxProduct(vector<string>& words) {
        int n=words.size();
        vector<int> codes;
        for(int i=0; i<n; i++){
            int code=0;
            for(int j=0; j<words[i].size(); j++){
                int idx=words[i][j]-'a';
                code|=(1<<idx);
            }
            codes.push_back(code);
        }

        // for(int code:codes) cout<<code<<" ";
        int ans=0, tmp=0;
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                if((codes[i]&codes[j])==0){
                    tmp=words[i].size()*words[j].size();
                    // cout<<tmp<<" "<<i<<" "<<j<<endl;
                }
                ans=max(ans, tmp);
            }
        }
        return ans;
    }
};