class Solution {
public:
    int miceAndCheese(vector<int>& d1, vector<int>& d2, int k) {
        int ans=0;
        priority_queue<int, vector<int>> pq;
        
        int n=d1.size();
        for(int i=0; i<n; i++){
            ans+=d2[i];
            pq.push(d1[i]-d2[i]);
        }
        
        for(int i=0; i<k; i++){
            ans+=pq.top();
            pq.pop();
        }
        
        return ans;
    }
};