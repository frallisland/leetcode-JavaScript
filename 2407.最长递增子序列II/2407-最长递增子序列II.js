/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var lengthOfLIS = function(nums, k) {
    let u=Math.max(...nums);
    // let u=Math.max(...nums)+1;
    let mx=new Array(u*4).fill(0);

    // 单点修改
    function modify(o, l, r, i, val){
        if(l===r){
            mx[o]=val;
            return;
        }

        let m=l+r>>1;
        if(i<=m) modify(o*2, l, m, i, val);
        else modify(o*2+1, m+1, r, i, val);
        mx[o]=Math.max(mx[o*2], mx[o*2+1]);
    }

    // 区间查询
    function query(o, l, r, L, R){
        if(L<=l && r<=R){
            return mx[o];
        }
        let res= 0;
        let m=l+r>>1;
        if(L<=m){
            res=query(o*2, l, m, L, R);
        }
        if(R>m){
            res=Math.max(res, query(o*2+1, m+1, r, L, R));
        }
        return res;
    }

    for(let x of nums){
        if(x===1){
            modify(1, 1, u, 1, 1);
        }else{
            let res=1+query(1, 1, u, Math.max(x-k, 1), x-1);
            modify(1, 1, u, x, res);
        }

        // x+=1;
        // let res=1+query(1, 1, u, Math.max(x-k, 1), x-1);
        // modify(1, 1, u, x, res);
    }
    return mx[1];
};