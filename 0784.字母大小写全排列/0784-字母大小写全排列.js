/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    function isChar(ch){
        if(ch>='a' && ch<='z') return 0;
        if(ch>='A' && ch<='Z') return 1;
        return  -1;
    }
    const n=s.length;
    let ans=[], arr=s.split('');
    function dfs(index,  n, ans){
        if(index===n){
            ans.push(arr.join(''));
            return;
        }

        let id=isChar(arr[index]);
        dfs(index+1, n, ans);
        if(id===0){
            arr[index]=arr[index].toUpperCase();
            dfs(index+1, n, ans);
            arr[index]=arr[index].toLowerCase();
        }else if(id===1){
            arr[index]=arr[index].toLowerCase();
            dfs(index+1, n, ans);
            arr[index]=arr[index].toUpperCase();
        }
    }
    dfs(0, n, ans);
    return ans;
};