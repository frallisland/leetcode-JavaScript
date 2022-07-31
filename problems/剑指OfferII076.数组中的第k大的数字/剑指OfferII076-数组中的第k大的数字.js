/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 // �������̾����ϸ��³�
var findKthLargest = function(nums, k) {
   let heapSize=nums.length
    buildMaxHeap(nums,heapSize) // ��������һ���󶥶�
    // �����³� �󶥶������Ԫ���³���ĩβ
    for(let i=nums.length-1;i>=nums.length-k+1;i--){
        swap(nums,0,i)
        --heapSize // �³����Ԫ�ز����뵽�󶥶ѵĵ���
        // ���µ����󶥶�
         maxHeapify(nums, 0, heapSize);
    }
    return nums[0]
   // ���¶��Ϲ���һ�Ŵ󶥶�
   function buildMaxHeap(nums,heapSize){
     for(let i=Math.floor(heapSize/2)-1;i>=0;i--){
        maxHeapify(nums,i,heapSize)
     }
   }
   // �������ң����϶��µĵ����ڵ�
   function maxHeapify(nums,i,heapSize){
       let l=i*2+1
       let r=i*2+2
       let largest=i
       if(l < heapSize && nums[l] > nums[largest]){
           largest=l
       }
       if(r < heapSize && nums[r] > nums[largest]){
           largest=r
       }
       if(largest!==i){
           swap(nums,i,largest) // ���нڵ����
           // ������������ķ�Ҷ�ӽڵ�
           maxHeapify(nums,largest,heapSize)
       }
   }
   function swap(a,  i,  j){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
   }
};