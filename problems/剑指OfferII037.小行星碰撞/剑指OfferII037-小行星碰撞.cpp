class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        vector<int> res;                //����������ģ��ջ

        for (int &item : asteroids)     //����С����
        {
            //ջ��Ϊ�գ�ջ��С�������ҷ��У���ǰС�������������ջ��С���ǽ�С�������ջ��С���Ǳ�ը
            while (!res.empty() && res.back() > 0 && res.back() < -item)
            {
                res.pop_back();
            }
            
            //ջ��Ϊ�գ���ǰС����������У��������Ǵ�С��ͬ�������ͬʱ��ը
            if (!res.empty() && item < 0 && res.back() == -item)
            {
                res.pop_back();
            }

            //1������ǰС�������ҷ��У����ù�ջ��С���ǵķ��з������϶�������ջ��С������ײ��
            //2��ջΪ��ʱ����ǰС������ջ��
            //3����ջ��С����������У����ùܵ�ǰС���ǵķ��з������϶�������ջ��С������ײ��
            else if (item > 0 || res.empty() || res.back() < 0)
            {
                res.push_back(item);
            }
        }
        
        return res;
    }
};