/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    // ��һ�������ֵ���ұߵ�һ�����������
    // �������ֵ���ұߵ�һ������
    const n=nums.length;
    let arr=[...nums];
    for(let i=n-2; i>=0; i--){
        arr[i]=Math.min(arr[i+1], arr[i]);
    }
    let max=-1;
    for(let i=0; i<n-1; i++){
        max=Math.max(max, nums[i]);
        if(max<=arr[i+1]) return i+1;
    }
};