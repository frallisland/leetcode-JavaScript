/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function(s) {
    let is_email=s.includes('@');

    if(is_email){
        let [name, domain]=s.split('@');
        name=name.toLowerCase();
        domain=domain.toLowerCase();
        name=name[0]+'*****'+name[name.length-1];
        return name+'@'+domain;
    }else{
        let digits='';
        for(let ch of s){
            if(ch.charCodeAt()>='0'.charCodeAt() && ch.charCodeAt()<='9'.charCodeAt()){
                digits+=ch;
            }
        }
        let country=digits.length-10;

        let preCode='';
        if(country===1) preCode='+*-';
        else if(country===2) preCode='+**-';
        else  if(country===3) preCode='+***-';
        return preCode+'***-***-'+digits.slice(country+6);
    }
};