class Solution {
public:
    vector<int> ans;
    //now ��ǰѡ��������leftʣ�������
    void func(int now, int left, int k){
        if(left == 0){
            ans.push_back(now);
            return ;
        }
        //��nowΪ2  kΪ3  ��û�з��ϵ���    
        if(now % 10 - k >= 0) {
            func(now * 10 + now %10 - k, left - 1, k);
        }
        //k=0ʱ��now % 10 - k ��now % 10 + k��һ���ģ��𰸻��ظ� 
        if(k != 0 && now % 10 + k < 10){
            func(now * 10 + now %10 + k, left - 1, k);
        }
    }
    vector<int> numsSameConsecDiff(int n, int k) {
        for(int i = 1; i<= 9; i++){
            func(i, n - 1, k);
        }
        return ans;
    }
};