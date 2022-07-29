class Solution {
public:
    vector<double> cutSquares(vector<int>& square1, vector<int>& square2) {
        // ������������������(cx1, cy1), (cx2, cy2)
        double cx1 = square1[0] + ((double)square1[2]) / 2;
        double cy1 = square1[1] + ((double)square1[2]) / 2;

        double cx2 = square2[0] + ((double)square2[2]) / 2;
        double cy2 = square2[1] + ((double)square2[2]) / 2;

        vector<pair<double, double> > res; // ��ѡ���㼯
        // �����������cx1 == cx2��cy1 == cy2
        if (cx1 == cx2) {
            res.push_back({cx1, square1[1]});
            res.push_back({cx1, square2[1]});
            res.push_back({cx1, square1[1]+square1[2]});
            res.push_back({cx1, square2[1]+square2[2]});
        } else if (cy1 == cy2) {
            res.push_back({square1[0], cy1});
            res.push_back({square2[0], cy1});
            res.push_back({square1[0]+square1[2], cy1});
            res.push_back({square2[0]+square2[2], cy1});
        } else {
            // ֱ�߷���f(y)
            auto fy = [=](double y) -> double {
                const double k = (cx2 - cx1) / (cy2 - cy1);
                return k * (y - cy1) + cx1;
            };
            // ֱ�߷���f(x)
            auto fx = [=](double x) -> double {
                const double k = (cy2 - cy1) / (cx2 - cx1);
                return k * (x - cx1) + cy1;
            };
            for (auto &sq : {square1, square2}) {
                for (auto &p : vector<pair<double, double> >{
                    {fy(sq[1]), sq[1]},
                    {fy(sq[1]+sq[2]), sq[1]+sq[2]},
                    {sq[0], fx(sq[0])},
                    {sq[0]+sq[2], fx(sq[0]+sq[2])}})
                {
                    // �жϺ�ѡ�����Ƿ�����������
                    if (p.first >= sq[0] && p.first <= sq[0] + sq[2]) {
                        if (p.second >= sq[1] && p.second <= sq[1] + sq[2]) {
                            res.push_back(p);
                        }
                    }
                }
            }
        }
        // �Զ��㼯����
        sort(res.begin(), res.end());
        // ���󶥵�Ϊ������`res`����ĵ�һ����������һ�����㡣
        return {
            res.front().first,
            res.front().second,
            res.back().first,
            res.back().second,
        };
    }
};