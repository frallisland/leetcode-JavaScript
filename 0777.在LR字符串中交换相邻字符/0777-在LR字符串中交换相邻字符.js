/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function(start, end) {
    if(start.length!==end.length) return false;
    const n=start.length;
    let i=0, j=0;
    while(i<n && j<n){
        while(i<n && start[i]==="X") i++;
        while(j<n && end[j]==="X") j++;

        if(i<n && j<n){
            if(start[i]!==end[j]) return false;
            if((start[i]==='L' && i<j) || (start[i]==='R' && i>j)) return false;
            i++, j++;
        }
    }

    while(i<n){
        if(start[i]!=='X') return false;
        i++;
    }
    while(j<n){
        if(end[j]!=='X') return false;
        j++;
    }
    return true;
};