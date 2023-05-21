/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    let cnt=new Map();
    let res=[];

    for(let name of names){
        if(cnt.has(name)){
            let count=cnt.get(name);
            let str=name+'('+count+')';
            while(cnt.has(str)){
                count++;
                str=name+'('+count+')';
            }
            cnt.set(str, 1);
            res.push(str);
            cnt.set(name, count+1);
        }else{
            res.push(name);
            cnt.set(name, 1);
        }
        
        // console.log(name, cnt);
    }
    return res;
};