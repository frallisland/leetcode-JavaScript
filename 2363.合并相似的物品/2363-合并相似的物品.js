/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let map=new Map();
    for(let [v, w] of items1){
        map.set(v, (map.get(v)||0)+w);
    }
    for(let [v, w] of items2){
        map.set(v, (map.get(v)||0)+w);
    }

    let res=Array.from(map).sort((a, b)=>a[0]-b[0]);
    return res;
};