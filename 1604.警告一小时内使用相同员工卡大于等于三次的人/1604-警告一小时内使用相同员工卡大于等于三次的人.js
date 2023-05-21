/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
 
function trans(timeStr){
    let [h, m]=timeStr.split(':').map(t=>parseInt(t));
    return h*60+m;
}
var alertNames = function(keyName, keyTime) {
    let map=new Map();
    const n=keyName.length;
    
    for(let i=0; i<n; i++){
        let arr=map.get(keyName[i])||[];
        arr.push(trans(keyTime[i]));
        map.set(keyName[i], arr);
    }

    for(let [_, arr] of map){
        arr.sort((a, b)=>a-b);
    }

    let ans=[];
    for(let [name, arr] of map){
        // console.log(arr);

        let flag=false;
        for(let i=0; i<arr.length-2; i++){
            if(arr[i+2]-arr[i]<=60){
                flag=true;
                break;
            }
        }
        if(flag) ans.push(name);
    }
    ans.sort();
    return ans;
};