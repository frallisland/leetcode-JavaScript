/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let rec=[]
    for(let i=0; i<names.length; i++){
        rec.push([heights[i], names[i]])
    }
    rec.sort((a, b)=>b[0]-a[0])
    let ans=[]
    for(let obj of rec){
        ans.push(obj[1])
    }
    return ans
};