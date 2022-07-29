class Solution:
    def search(self, arr: List[int], target: int) -> int:
        n=len(arr)
        left=0
        right=n-1
        while left<=right:
            # �ص�1����left����ʱֱ�ӷ���, ��Ϊ�ҵ�����С������
            if arr[left]==target:
                return left
            mid=left+(right-left)//2
            # �ص�2�����м�ֵ����Ŀ��ֵ�����ұ߽��Ƶ��м䣬��Ϊ��߿��ܻ�����ȵ�ֵ
            if arr[mid]==target:
                right=mid
            elif arr[0]<arr[mid]:
                if arr[0]<=target<arr[mid]:
                    right=mid-1
                else:
                    left=mid+1
            elif arr[0]>arr[mid]:
                if arr[mid]<target<=arr[n-1]:
                    left=mid+1
                else:
                    right=mid-1
            else:
                # �ص�3�����м�����������������ʱ������߽�����
                    left+=1
        return -1