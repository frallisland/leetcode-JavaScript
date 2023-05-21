/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */

var minSpeedOnTime = function(dist, hour) {
   let l = 1,
    r = 1000000000,
    ans = Infinity;

  function check(m){
      let ans=0;
      for(let i=0; i<dist.length; i++){
          if(i!==dist.length-1){
              ans+=Math.ceil(dist[i]/m);
          }else{
              ans+=dist[i]/m;
          }
      }
    //   console.log(m, ans);
      return ans<=hour;
  }

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (check(m)) {
      r = m - 1;
      ans = m;
    } else {
      l = m + 1;
    }
  }
//   console.log(ans, l, r);
  return ans===Infinity?-1:ans;
};