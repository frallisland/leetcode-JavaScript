/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let mp=new Map();
    const n=cpdomains.length;
    for(let i=0; i<n; i++){
        let [cnt, arr]=cpdomains[i].split(' ');
        cnt=parseInt(cnt);
        arr=arr.split('.');
        for(let st=0; st<arr.length; st++){
            let d=arr.slice(st);
            d=d.join('.');
            let dCnt=mp.get(d)||0;
            mp.set(d, dCnt+cnt);
        }
    }
    let ans=[];
    for(let [k, v] of mp){
        ans.push(v+' '+k);
    }
    return ans;
};