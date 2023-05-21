class Solution:
    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:

        m, n = len(mat), len(mat[0])

        # �ҵ����������ֵ��������
        def getColMax(i: int) -> (int, int):
            value, index = mat[0][i], 0
            for row in range(1, m):
                if mat[row][i] > value:
                    value, index = mat[row][i], row
            return value, index

        # ���ַ���Ƭ
        left, right = 0, n - 1
        while left < right:
            mid = left + int((right-left)/2)
            max_val, max_idx = getColMax(mid)
            if mid == 0: # left = 0, right = 1
                if max_val > mat[max_idx][1]:
                    return [max_idx, 0]
                else:
                    left = 1
            else:
                if mat[max_idx][mid-1] < max_val and mat[max_idx][mid+1] < max_val:
                    return [max_idx, mid]
                elif mat[max_idx][mid-1] < max_val < mat[max_idx][mid+1]:
                    left = mid + 1
                else:
                    right = mid - 1
        
        # �������ʣ�µ�һ�У������ֵһ���Ǽ���ֵ
        _, idx = getColMax(left)
        return [idx, left]
