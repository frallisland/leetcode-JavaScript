/**
 * @param {string} s
 * @return {string}
 */
function expand(s, l, r){
    while(l>=0 && r<s.length && s[l]===s[r]){
        l--, r++;
    }
    return Math.floor((r-l-2)/2)
}
var longestPalindrome = function(s) {
    let [start, end]=[0, -1]

    let str='#'+s.split('').join('#')+'#'
    let arm_len=[]
    let right=-1
    let j=-1
    let cur_arm_len, i_sym, min_arm_len
    for(let i=0; i<str.length; i++){
        // right 表示最大右边界    
        if(right>=i){
            i_sym=2*j-i
            min_arm_len=Math.min(arm_len[i_sym], right-i)
            cur_arm_len=expand(str, i-min_arm_len, i+min_arm_len)
        }else{
            cur_arm_len=expand(str, i, i)
        }
        arm_len.push(cur_arm_len)

        // 越界重新定义 center 和 右边界
        if(i+cur_arm_len>right){
            j=i
            right=i+cur_arm_len
        }

        // 最长回文子串更新
        if(2*cur_arm_len+1>end-start){
            start=i-cur_arm_len
            end=i+cur_arm_len
        }
    }
    let chs=str.substring(start+1, end+1).split('')
    // console.log(chs)
    let ans=''
    for(let i=0; i<chs.length; i+=2){
        ans+=chs[i]
    }
    return ans
};