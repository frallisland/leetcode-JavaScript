/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let ans='', _key='', close=false;
    let map=new Map(knowledge);

    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            close=true;
        }
        // 不存在嵌套的括号,存在嵌套的用栈来模拟
        if(close){
            _key+=s[i];
        }else{
            ans+=s[i];
        }

        if(s[i]===')'){
            close=false;
            _key=_key.substring(1, _key.length-1);
            if(map.has(_key)){
                ans+=map.get(_key);
            }else{
                ans+='?';
            }
            _key='';
        }
    }
    return ans;
};