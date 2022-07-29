class Solution {
public:
    int maximumSwap(int num) {
        string s = to_string(num);
        stack<int> stk;
        int n = s.size();
        //ά��һ���ݼ��ĵ���ջ
        int i = 0;
        for(; i < n; ++i){
            if(stk.empty() || s[i] <= s[stk.top()])
                stk.push(i);
            else break;
        }
        //���i == n��˵���������ֶ��ǽ������еģ�ֱ�ӷ��ؼ���
        if(i == n)
            return stoi(s);

        int l_index;
        //r_index�ӵ�һ���ǵ����������±꿪ʼ���ҵ����ֵ
        int r_index = i++;
        for(; i < n; ++i){
            if(s[i] >= s[r_index])
                r_index = i;
        }
        //ͨ���Ƚ�ջ���ҵ�l_index
        while(!stk.empty() && s[r_index] > s[stk.top()]){
            l_index = stk.top();
            stk.pop();
        }
        swap(s[l_index], s[r_index]);
        return stoi(s);
    }
};