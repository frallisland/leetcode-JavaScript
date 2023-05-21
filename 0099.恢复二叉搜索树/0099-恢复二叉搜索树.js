// 要是存在可以重复的值怎么办
function inorder(root, nums){
    if(root===null) return;

    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}
function sweepNum(nums){
    let [index1, index2]=[-1, -1];
    for(let i=0; i<nums.length-1; i++){
        if(nums[i+1]<nums[i]){
            index2=i+1;
            if(index1===-1) index1=i;
        }
    }
    let x=nums[index1], y=nums[index2];
    return [x, y]; 
}
function recover(root, cnt, x, y){
    if(root===null || cnt===0) return;
    if(root.val===x || root.val===y){
        cnt--;
        root.val=(root.val===x?y:x);       
    }

    recover(root.left, cnt, x, y);
    recover(root.right, cnt, x, y);
}

var recoverTree = function(root) {
    let nums=[];
    inorder(root, nums);
    let [x, y]=sweepNum(nums);
    recover(root, 2, x, y);
};