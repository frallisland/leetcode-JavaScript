/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    const n=skill.length;
    skill.sort((a, b)=>a-b);
    
    let t=skill[0]+skill[n-1], acc=0;
    for(let i=0; i<n/2; i++){
        let cur=skill[i]+skill[n-1-i];
        if(cur!==t) return -1;
        acc+=skill[i]*skill[n-1-i];
    }
    return acc;
};