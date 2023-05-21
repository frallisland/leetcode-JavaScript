/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    if(password.length<8) return false;
    let lower=false, upper=false, digit=false, ts=false;
    for(let i=0; i<password.length; i++){
        let ch=password[i];
        if(i>0 && ch===password[i-1]) return false;
        if(ch.charCodeAt()>='a'.charCodeAt() && ch.charCodeAt()<='z'.charCodeAt()) lower=true;
        if(ch.charCodeAt()>='A'.charCodeAt() && ch.charCodeAt()<='Z'.charCodeAt()) upper=true;
        if(ch.charCodeAt()>='0'.charCodeAt() && ch.charCodeAt()<='9'.charCodeAt()) digit=true;
        if("!@#$%^&*()-+".indexOf(ch)!==-1) ts=true; 
    }
    return lower && upper && digit && ts;
};