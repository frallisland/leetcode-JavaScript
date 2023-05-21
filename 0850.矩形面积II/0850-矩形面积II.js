/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function(rs) {
    const MOD=1000000007n;
    const n=rs.length;
    
    let ans=BigInt(0);

    let lsx=rs.reduce((pre, cur)=>{
        pre.push(cur[0], cur[2]);
        return pre;
    }, []);

    

    lsx.sort((a, b)=>a-b);
    for(let i=1; i<lsx.length; i++){
        let [a, b]=[lsx[i-1], lsx[i]];
        let len=b-a;
        if(len===0) continue;
        let temp=[];
        for(let info of rs){
            if(info[0]<=a && b<=info[2]){
                temp.push([info[1], info[3]]);
            }
        }
        temp.sort((a, b)=>{
            return a[0]!==b[0]?a[0]-b[0]:a[1]-b[1];
        });

        let l=-1, r=-1, tot=0;
        for(let info of temp){
            if(info[0]>r){
                tot+=(r-l);
                l=info[0];
                r=info[1];
            }else if(info[1]>r){
                r=info[1];
            }
        }
        tot+=(r-l);
        ans+=BigInt(len)*BigInt(tot);
        ans%=MOD;
    }
    return ans;
};