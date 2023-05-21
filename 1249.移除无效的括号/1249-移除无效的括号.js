/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stk=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            stk.push(i);
        }else if(s[i]===')'){
            if(stk.length && s[stk[stk.length-1]]==='(') stk.pop();
            else stk.push(i);
        }
    }
    
    console.log(stk);

    let ans='', j=0;
    for(let i=0; i<s.length; i++){
        if(stk.length && stk[j]===i){
            j++;
            continue;
        }
        ans+=s[i];
    }
    return ans;
};