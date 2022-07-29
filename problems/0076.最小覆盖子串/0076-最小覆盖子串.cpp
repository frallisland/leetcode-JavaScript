class Solution {
public:
    bool isCurrentStrSatis(unordered_map<char, int> &current_satisfied, const unordered_map<char, int> &satisfied)
    {
        for (auto ch_pair : satisfied)
        {
            if (current_satisfied.count(ch_pair.first) <= 0 || current_satisfied[ch_pair.first] < ch_pair.second)
            {
                return false;
            }
        }
        return true;
    }

    string minWindow(string s, string t) {
        /* ����˼·����������
        1. �����ַ���t���ҳ������ַ����ֵĴ���
        2.�����ַ���s����ʼ�������ڣ�
        2.1�����󴰿��ƶ���������ǰ�ַ�����t�ļ�������� ���������ַ�������
        2.2�����Ҵ����ƶ���������ǰ�Ӵ�������t�������ַ�
        2.3������ǰ�Ӵ��Ѿ�����t�����ַ�ʱ����¼�µ�ǰ�Ӵ���left++���Ҵ��ڼ����ƶ��������󴰿ڵ��ַ�λ��
        */
        unordered_map<char, int>satisfied;
        unordered_map<char, int>current_satisfied;
        for (auto ch : t)
        {
            satisfied[ch]++;
        }

        int left  = 0;
        int right = -1;// ��ǰ�ַ��������ұ߽磺[left, right]
        string final_subStr;
        int n = s.size();
        while (right < n)
        {
            if (!isCurrentStrSatis(current_satisfied, satisfied))
            {
                // �����㣬���죺right->
                right++;
                if (satisfied.count(s[right]) > 0)
                {
                    current_satisfied[s[right]]++;
                }
                continue;
            }

            while (satisfied.count(s[left]) <= 0 || current_satisfied[s[left]] > satisfied[s[left]])
            {
                // ���㣬��ʼ������left->
                if (satisfied.count(s[left]) > 0)
                {
                    current_satisfied[s[left]]--;
                }
                left++;
            }

            if (final_subStr.empty() || right - left + 1 < final_subStr.size())
            {
                final_subStr = s.substr(left, right - left + 1);
            }

            current_satisfied[s[left]]--;
            left++;
        }

        return final_subStr;
    }
};