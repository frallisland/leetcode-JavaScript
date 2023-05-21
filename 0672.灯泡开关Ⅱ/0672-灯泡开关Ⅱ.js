/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function(n, presses) {
    let st=new Set();
    for(let i=0; i<Math.pow(2, 4); i++){
        let pressArr=[i&1, (i>>1)&1, (i>>2)&1, (i>>3)&1];
        let _sum=pressArr.reduce((prev, curr)=>prev+curr);
        if(_sum%2===presses%2 && _sum<=presses){ // 按压次数同奇同偶，操作次数小于总次数
            let status=pressArr[0]^pressArr[2]^pressArr[3];
            if(n>=2){
                status|=(pressArr[0]^pressArr[1])<<1;
            }
            if(n>=3){
                status|=(pressArr[0]^pressArr[2])<<2;
            }
            if(n>=4){
                status|=(pressArr[0]^pressArr[1]^pressArr[3])<<3;
            }
            st.add(status);
        }
    }
    return Array.from(st).length;
};