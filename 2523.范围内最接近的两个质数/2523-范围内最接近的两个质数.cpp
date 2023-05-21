#include <bits/stdc++.h>

using namespace std;
typedef long long ll;
const int maxx=1e5+7;
const int N=1e6+7;
int pre[N],cnt;
bool str[N];
void prime(int top)//找到50000以内的素数
{
    memset(pre,0,sizeof pre);//以下初始化非常重要！！
    memset(str,0,sizeof str);
    cnt=0;
    for(int i=2;i<=top;i++)
    {
        if(!str[i]) pre[cnt++]=i;
        for(int j=0;pre[j]*i<=top;j++)
        {
            str[pre[j]*i]=true;
            if(i%pre[j]==0) break;
        }
    }
}

class Solution {
public:
    vector<int> closestPrimes(int l, int u) {
        prime(50000);
        memset(str,0,sizeof str);
        for(int i=0;i<cnt;i++)
        {
            ll p=pre[i];
            for(ll j=max((l+p-1)/p*p,2*p);j<=u;j+=p)//通过p的倍数去找属于区间l-u的质数时，临界值会爆int；
            {
                str[j-l]=true;//巧妙地存储方式；
            }
        }
        cnt=0;//这里的把cnt归零也是个坑；
        for(int i=0;i<=u-l;i++)
        {
            if(!str[i]&&i+l>1) pre[cnt++]=i+l;//把被标记的数找出来，存起来；并且当l=1的时候要特判
        }
        if(cnt<2) return vector<int>{-1, -1};
        else
        {
            int minn=0,maxx=0;
            for(int i=0;i+1<cnt;i++)
            {
                int d=pre[i+1]-pre[i];
                if(d>pre[maxx+1]-pre[maxx]) maxx=i;
                if(d<pre[minn+1]-pre[minn]) minn=i;
            }
            return vector<int>{pre[minn],pre[minn+1]};
        }
    }
};

