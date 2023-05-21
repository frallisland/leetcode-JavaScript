var findTheDifference = function(s, t) {
    let sv = 0, tv = 0;
    for (let i = 0; i < s.length; i++) {
        sv += s[i].charCodeAt();
    }
    for (let i = 0; i < t.length; i++) {
        tv += t[i].charCodeAt();
    }
    return String.fromCharCode(tv - sv);
};