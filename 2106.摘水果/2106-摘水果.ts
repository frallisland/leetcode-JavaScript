function lowerBound(arr:Array<number>, tar:number):number {
  // arr ”––Úø…÷ÿ∏¥
  let l = 0,
    r = arr.length - 1,
    ans = arr.length;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] >= tar) {
      r = m - 1;
      ans = m;
    } else {
      l = m + 1;
    }
  }
  return ans;
}

function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
    const n:number=fruits.length;
    let points=new Array(n).fill(null).map((_, i)=>fruits[i][0]);

    let left:number=lowerBound(points, startPos-k);
    let right:number=lowerBound(points, startPos+1);

    let ans:number=0;
    for(let i:number=left; i<right; i++){
        ans+=fruits[i][1];
    }
    let s:number=ans;
    while(right<n && fruits[right][0]<=startPos+k){
        s+=fruits[right][1];
        while(fruits[right][0]*2-fruits[left][0]-startPos>k &&
            fruits[right][0]-fruits[left][0]*2+startPos>k){
                s-=fruits[left][1];
                left++;
        }
        ans=Math.max(ans, s);
        right++;
    }
    return ans;
};