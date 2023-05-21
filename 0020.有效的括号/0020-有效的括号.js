/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stk=[];
    for(let ch of s){
        if(ch==='(' || ch==='[' || ch==='{'){
            stk.push(ch);
        }else{
            if(stk.length && (stk[stk.length-1]==='[' && ch===']') || (stk[stk.length-1]==='(' && ch===')') || (stk[stk.length-1]==='{' && ch==='}')){
                stk.pop();
            }else{
                return false;
            }
        }
    }
    return !stk.length;
};