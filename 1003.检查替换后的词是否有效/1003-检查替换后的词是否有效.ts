function isValid(s: string): boolean {
    const stk:Array<string>=new Array();
    
    for(let ch of s){
        if(ch.charCodeAt(0)>'a'.charCodeAt(0) && (stk.length===0 || ch.charCodeAt(0)-stk.pop().charCodeAt(0)!==1)){
            return false;
        }
        if(ch.charCodeAt(0)<'c'.charCodeAt(0)){
            stk.push(ch);
        }
    }
    return stk.length===0;
};