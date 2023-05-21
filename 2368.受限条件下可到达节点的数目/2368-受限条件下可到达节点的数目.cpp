class Solution {
public:
    int reachableNodes(int n, vector<vector<int>>& edges, vector<int>& ress) {
        unordered_map<int, vector<int>> mp;
        set<int> rest;
        for(int i=0; i<edges.size(); i++){
            int ii=edges[i][0], o=edges[i][1];
            mp[ii].push_back(o);
            mp[o].push_back(ii);
        }
        for(int val:ress){
            rest.insert(val);
        }
        queue<int> q;
        vector<int> vis(n, 0);
        
        int ans=0;
        q.push(0);
        vis[0]=1;
        
        while(q.size()){
            int node=q.front();
            // cout<<node<<endl;
            q.pop();
            ans++;
            for(auto v:mp[node]){
                if(vis[v] || rest.count(v)) continue;
                q.push(v);
                vis[v]=1;
            }
        }
        return ans;
    }
};