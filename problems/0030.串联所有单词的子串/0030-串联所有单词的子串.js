var findSubstring = function(s, words) {
    let wsl=words[0].length, wl=words.length, wm={};
    // ��ϣͳ��
    for(const w of words) wm[w]=(wm[w]||0)+1;

    let i=0, l=0, r=0, count=0, res=[], win={};
    // ���ó���wsl������Ҳֻ���ظ�ǰ�������
    while(i<wsl){
        l=i, r=i, count=0, win={};
        // �ҵ����ʵ�һ��
        while(r<=s.length-wsl){
            let ss=s.substring(r, r+wsl);
            r+=wsl;
            // û���������ֱ������
            if(!wm[ss]){
                win={};
                count=0;
                l=r;
            }else{
                win[ss]=(win[ss]||0)+1;
                count++;
                // ��Ӧ���ʳ����ˣ�ֱ���ƶ���߽�
                while(win[ss]>wm[ss]){
                    let sl=s.substring(l, l+wsl);
                    win[sl]=(win[sl]||0)-1;
                    count--;
                    l+=wsl;
                }
                if(count===wl) res.push(l);
            }
        }
        i++;
    }
    return res;
};