class Solution {
public:
    int minimizeXor(int num1, int num2) {
        int ans = 0;
        int cnt = __builtin_popcount(num2);
        for (int i = 30; i >= 0 && cnt; --i) {
            if (num1 & (1 << i)) {
                ans ^= (1 << i);
                --cnt;
            }
        }
        for (int i = 0; i <= 30 && cnt; ++i) {
            if (!(num1 & (1 << i))) {
                ans ^= (1 << i);
                --cnt;
            }
        }
        return ans;
    }
};