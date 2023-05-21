/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
    let neg=(n[0]==='-'?true:false);
    let arr=n.split('');
    const len=arr.length;
    let insert=false;
    x=x.toString();

    if(neg){
        if(arr[1].charCodeAt()>x.charCodeAt()){
            arr.splice(1, 0, x);
            insert=true;
        }else{
            for(let i=2; i<len; i++){
                if(arr[i].charCodeAt()>x.charCodeAt()){
                    arr.splice(i, 0, x);
                    insert=true;
                    break;
                }
            }
            if(!insert) arr.push(x);
        }
    }else{
        if(arr[0].charCodeAt()<x.charCodeAt()){
            arr.unshift(x);
            insert=true;
        }else{
            for(let i=1; i<len; i++){
                if(arr[i].charCodeAt()<x.charCodeAt()){
                    arr.splice(i, 0, x);
                    insert=true;
                    break;
                }
            }
            if(!insert) arr.push(x);
        }
    }
    return arr.join('');
};