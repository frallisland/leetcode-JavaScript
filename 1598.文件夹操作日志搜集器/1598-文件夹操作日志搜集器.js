/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    logs=logs.map(x=>x.split('/')[0]);

    let path=[];
    for(let i=0; i<logs.length; i++){
        if(logs[i]==='.'){
            continue;
        }else if(logs[i]==='..' && path.length){
            path.pop();
        }else if(logs[i]!=='..'){
            path.push(logs[i]);
        }
    }
    return path.length;
};