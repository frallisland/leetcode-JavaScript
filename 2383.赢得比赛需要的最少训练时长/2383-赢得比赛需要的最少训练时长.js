/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(ien, iex, en, ex) {
    let res=0;
    for(let i=0; i<en.length; i++){
        if(en[i]>=ien){
            let delta=en[i]+1-ien;
            ien+=delta;
            res+=delta;
        }
        if(ex[i]>=iex){
            let alpha=ex[i]+1-iex;
            iex+=alpha;
            res+=alpha;
        }
        ien-=en[i];
        iex+=ex[i];
    }
    return res;
};