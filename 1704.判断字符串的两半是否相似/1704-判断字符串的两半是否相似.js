/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let cnt=new Map();
    function voewl(ch){
        return ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u';
    }
    for(let l=0, r=s.length-1; l<r; l++, r--){
        let lch=s[l].toLowerCase(), rch=s[r].toLowerCase();
        if(voewl(lch)){
            let num=cnt.get(lch)||0;
            cnt.set(lch, num+1);
        }
        if(voewl(rch)){
            let num=cnt.get(rch)||0;
            cnt.set(rch, num-1);
        }
    }
    let ans=0;
    for(let [ch, num] of cnt){
        ans+=num;
    }
    return ans===0;
};