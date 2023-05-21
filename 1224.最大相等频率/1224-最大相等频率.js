/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    const freq=new Map();
    const count=new Map();
    let res=0, maxFreq=0;
    for(let i=0; i<nums.length; i++){
        // countû�м�¼
        if(!count.has(nums[i])){
            count.set(nums[i], 0);
        }
        // ɾ��֮ǰ�ļ�¼
        if(count.get(nums[i])>0){
            freq.set(count.get(nums[i]), freq.get(count.get(nums[i]))-1);
        }
        // ���µ�ǰ�ļ�¼
        count.set(nums[i], count.get(nums[i])+1);
        // ��ȡ��ǰ���Ƶ��
        maxFreq=Math.max(maxFreq, count.get(nums[i]));
        // �൱������Ϊ0��������һ��Ϊundefined
        if(!freq.has(count.get(nums[i]))){
            freq.set(count.get(nums[i]), 0);
        }
        freq.set(count.get(nums[i]), freq.get(count.get(nums[i]))+1);
        const ok= maxFreq===1 || 
                freq.get(maxFreq)*maxFreq+freq.get(maxFreq-1)*(maxFreq-1) === i+1 && freq.get(maxFreq) ===1 ||
                freq.get(maxFreq)*maxFreq+1===i+1;
        if(ok){
            res=Math.max(res, i+1);
        }
    }
    return res;
};