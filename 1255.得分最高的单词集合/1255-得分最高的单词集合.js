/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    const n=words.length;
    let ans=0;
    let values=new Array(n).fill(0);

    for(let i=0; i<n; i++){
        let value=0;
        for(let ch of words[i]){
            let idx=ch.charCodeAt()-'a'.charCodeAt();
            value+=score[idx];
        }
        values[i]=value;
    }

    let cnt_letter=new Array(26).fill(0);
    for(let ch of letters){
        let idx=ch.charCodeAt()-'a'.charCodeAt();
        cnt_letter[idx]++;
    }

    function check(num, words, cnt_letter){
        let tmp_letter=new Array(26).fill(0);
        let idxs=[];
        let cur=0;
        
        while(num){
            if(num&1) idxs.push(cur);
            num>>=1;
            cur++;
        }

        for(let idx of idxs){
            for(let ch of words[idx]){
                let ch_idx=ch.charCodeAt()-'a'.charCodeAt();
                if(tmp_letter[ch_idx]+1>cnt_letter[ch_idx]) return false;
                tmp_letter[ch_idx]++;
            }
        }
        return true;
    }
    
    function get_value(num, values){
        let cur=0, ans=0;
        while(num){
            if(num&1) ans+=values[cur];
            cur++;
            num>>=1;
        }
        return ans;
    }

    // console.log(values);

    for(let i=0; i<(1<<n); i++){
        if(check(i, words, cnt_letter)){
            ans=Math.max(ans, get_value(i, values));
            // console.log(i.toString(2), get_value(i, values));
        }
    }
    return ans;
};