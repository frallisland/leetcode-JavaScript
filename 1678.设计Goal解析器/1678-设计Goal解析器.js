/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const n=command.length;
    let ans='';
    for(let i=0; i<n; ){
        if(command[i]==='G'){
            ans+='G';
            i++;
        }else if(command[i]==='('){
            if(command[i+1]===')'){
                ans+='o';
                i+=2;
            }else{
                ans+='al';
                i+=4;
            }
        }
    }
    return ans;
};