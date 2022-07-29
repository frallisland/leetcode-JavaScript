class Solution {
public:
    int divide(int dividend, int divisor) {
        if(dividend==INT_MIN){
            if(divisor==1) return INT_MIN;
            if(divisor==-1) return INT_MAX;
        }
        if(divisor==INT_MIN) return dividend==INT_MIN?1:0;
        if(dividend==0) return 0;

        bool rev=false;
        if(dividend>0){
            dividend=-dividend;
            rev=!rev;
        }
        if(divisor>0){
            divisor=-divisor;
            rev=!rev;
        }
        // ���ٳ�
        // �ж� y*z>=x �Ƿ����, y z x ��Ϊ����
        auto quickAdd=[](int y, int z, int x){
            int res=0, add=y;
            while(z){
                if(z&1){
                    if(res<x-add) return false;
                    res+=add;
                }

                // ���add*2С��xֱ�ӷ���false
                if(z!=1){
                    if(add<x-add) return false;
                    add+=add;
                }
                z>>=1;
            }
            return true;
        };

        int l=1, r=INT_MAX, ans=0;
        while(l<=r){
            int m=l+((r-l)>>1);
            bool check=quickAdd(divisor, m, dividend);
            if(check){
                ans=m;
                if(m==INT_MAX) break;
                l=m+1;
            }else r=m-1;
        }
        return rev?-1*ans:ans;
    }
};