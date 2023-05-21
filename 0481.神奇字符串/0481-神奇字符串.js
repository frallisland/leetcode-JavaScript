/**
 * @param {number} n
 * @return {number}
 */
let s=[1, 2, 2], i=2;
while(s.length<100000){
    let next=s[s.length-1]^3;
    s.push(...new Array(s[i]).fill(next));
    i++;
}
let acc=new Array(100000).fill(0);
acc[0]=1;
for(let i=1; i<100000; i++){
    acc[i]+=acc[i-1]+(2-s[i]);
}
var magicalString = function(n) {
    return acc[n-1];
};