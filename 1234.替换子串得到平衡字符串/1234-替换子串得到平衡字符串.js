/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    const n=s.length;
    let map=new Map();
    for(let ch of s){
        map.set(ch, (map.get(ch)||0)+1);
    }

    let dif=new Map();
    for(let [k, v] of map){
        if(v>Math.floor(n/4)){
            // 最少需要的字符数
            dif.set(k, v-Math.floor(n/4));
        }
    }

    console.log(dif);

    let ans=n, cur=new Map();
    // 双指针寻找最小段
    for(let l=0, r=0; r<n; r++){
        
        cur.set(s[r], (cur.get(s[r])||0)+1);

        while(cur.get(s[l])>(dif.get(s[l])||0)){
            cur.set(s[l], cur.get(s[l])-1);
            l++;
        }

        let flag=true;
        for(let [k, v] of dif){
            if((cur.get(k)||0)<v){
                flag=false;
                break;
            }
        }
        if(flag){

            ans=Math.min(ans, r-l+1);
        }
    }
    return ans;
};