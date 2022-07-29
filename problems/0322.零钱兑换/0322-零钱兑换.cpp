class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        int Max=amount+1;
        vector<int> dp(amount+1, Max);
        dp[0]=0;
        for(int i=1; i<(int)dp.size(); i++){
            for(int j=0; j<(int)coins.size(); j++){
                if(i>=coins[j]){
                    dp[i]=min(dp[i], dp[i-coins[j]]+1);
                }
            }
        }
        return dp[amount]>amount?-1:dp[amount];
    }
};