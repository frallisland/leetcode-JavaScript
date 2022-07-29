class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int length = nums.size();
        vector<int> answer(length);

        // answer[i] ��ʾ���� i �������Ԫ�صĳ˻�
        // ��Ϊ����Ϊ '0' ��Ԫ�����û��Ԫ�أ� ���� answer[0] = 1
        answer[0] = 1;
        for (int i = 1; i < length; i++) {
            answer[i] = nums[i - 1] * answer[i - 1];
        }

        // R Ϊ�Ҳ�����Ԫ�صĳ˻�
        // �տ�ʼ�ұ�û��Ԫ�أ����� R = 1
        int R = 1;
        for (int i = length - 1; i >= 0; i--) {
            // �������� i����ߵĳ˻�Ϊ answer[i]���ұߵĳ˻�Ϊ R
            answer[i] = answer[i] * R;
            // R ��Ҫ�����ұ����еĳ˻������Լ�����һ�����ʱ��Ҫ����ǰֵ�˵� R ��
            R *= nums[i];
        }
        return answer;
    }
};