/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var modify=function(str1, str2){
    let dis=0;
    for(let i=0; i<str1.length; i++){
        if(str1[i]!=str2[i]) dis++;
        if(dis>1) return false;
    }
    return true;
}
var compare=function(str1, str2){
    // str1����
    if(str2.length==0) return true;
    let idx=-1;
    for(let i=0; i<str2.length; i++){
        if(str1[i]!=str2[i]){
            idx=i;
            break;
        }
    }
    if(idx==-1) return true;
    return str2.substring(0, idx)==str1.substring(0,idx) && str2.substring(idx)==str1.substring(idx+1);
}

var oneEditAway = function(first, second) {
    if(first===second) return true;
    let fl=first.length, sl=second.length;
    if(fl-sl==1){
        // ɾ��
        return compare(first, second);
    }else if(sl-fl==1){
        // ����
        return compare(second, first);
    }else if(sl==fl){
        // �޸�
        return modify(first, second);
    }
    return false;
};