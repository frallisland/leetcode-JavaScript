class BookMyShow {
    int n, m;
    vector<int> min;
    vector<long> sum;

    // �� idx �ϵ�Ԫ��ֵ���� val
    void add(int o, int l, int r, int idx, int val) {
        if (l == r) {
            min[o] += val;
            sum[o] += val;
            return;
        }
        int m = (l + r) / 2;
        if (idx <= m) add(o * 2, l, m, idx, val);
        else add(o * 2 + 1, m + 1, r, idx, val);
        min[o] = std::min(min[o * 2], min[o * 2 + 1]);
        sum[o] = sum[o * 2] + sum[o * 2 + 1];
    }

    // �������� [L,R] �ڵ�Ԫ�غ�
    long query_sum(int o, int l, int r, int L, int R) { // L �� R �������ݹ�����о����䣬�����д����������
        if (L <= l && r <= R) return sum[o];
        long sum = 0L;
        int m = (l + r) / 2;
        if (L <= m) sum += query_sum(o * 2, l, m, L, R);
        if (R > m) sum += query_sum(o * 2 + 1, m + 1, r, L, R);
        return sum;
    }

    // �������� [1,R] �� <= val ������λ�ã�������ʱ���� 0
    int index(int o, int l, int r, int R, int val) { // R �������ݹ�����о����䣬�����д����������
        if (min[o] > val) return 0; // ˵�����������Ԫ��ֵ������ val
        if (l == r) return l;
        int m = (l + r) / 2;
        if (min[o * 2] <= val) return index(o * 2, l, m, R, val); // ������벿��
        if (m < R) return index(o * 2 + 1, m + 1, r, R, val); // �����Ұ벿��
        return 0;
    }

public:
    BookMyShow(int n, int m) : n(n), m(m), min(n * 4), sum(n * 4) {}

    vector<int> gather(int k, int maxRow) {
        int i = index(1, 1, n, maxRow + 1, m - k);
        if (i == 0) return {}; // ������
        int seats = query_sum(1, 1, n, i, i);
        add(1, 1, n, i, k); // ռ�� k ����λ
        return {i - 1, seats};
    }

    bool scatter(int k, int maxRow) {
        if ((long) (maxRow + 1) * m - query_sum(1, 1, n, 1, maxRow + 1) < k) return false; // ʣ����λ���� k ��
        // �ӵ�һ��û���������ſ�ʼռ��
        for (int i = index(1, 1, n, maxRow + 1, m - 1);; ++i) {
            int left_seats = m - query_sum(1, 1, n, i, i);
            if (k <= left_seats) { // ʣ�������������������
                add(1, 1, n, i, k);
                return true;
            }
            k -= left_seats;
            add(1, 1, n, i, left_seats);
        }
    }
};