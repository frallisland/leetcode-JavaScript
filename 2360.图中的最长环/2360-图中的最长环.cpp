class Solution {
public:
    vector<int> dists;
    int get_cycle(vector<int>& edges, vector<int>& vis, vector<int> &cycle, int node){
        queue<int> q;
        vector<int> path;
        q.push(node);
        int idx=1;
        
        int ans=-1;
        // cout<<ans<<endl;
        while(q.size()){
            int nnode=q.front();
            dists[nnode]=idx++;
            q.pop();
            
            path.push_back(nnode);
            vis[nnode]=1;
            
            if(edges[nnode]==-1) break;
            
            if(vis[edges[nnode]] && cycle[edges[nnode]]!=0){
                ans=idx-dists[edges[nnode]];
                break;
            }
            if(!vis[edges[nnode]]) q.push(edges[nnode]);
        }
        // pprint(cycle);
        // pprint(path);
        
        for(int i=0; i<path.size(); i++){
            cycle[path[i]]=0;
        }
        
        // cout<<ans<<endl;
        return ans;
    }
    
    void pprint(vector<int> &arr){
        for(int num:arr) cout<<num<<" ";
        cout<<endl;
    }
    
    int longestCycle(vector<int>& edges) {
        int n=edges.size();
        vector<int> vis(n, 0), cycle(n, 1);
        dists.resize(n);
        for(int i=0; i<n; i++) dists[i]=0;
        
        int ans=-1;
        for(int i=0; i<n; i++){
            if(vis[i]) continue;
            int aans=get_cycle(edges, vis, cycle, i);
            // cout<<i<<" "<<ans<<" "<<aans<<endl;
            ans=max(ans, aans);
        }
        // pprint(dists);
        return ans;
    }
};