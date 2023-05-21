/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(ws) {
    ws.forEach((v, i)=>{
        let st=new Set(v.split('').sort((a, b)=>a.charCodeAt()-b.charCodeAt()));
        ws[i]=Array.from(st).join('');
    })

    let ans=0;
    for(let i=0; i<ws.length; i++){
        for(let j=i+1; j<ws.length; j++){
            if(ws[i]===ws[j]) ans++;
        }
    }
    return ans;
};