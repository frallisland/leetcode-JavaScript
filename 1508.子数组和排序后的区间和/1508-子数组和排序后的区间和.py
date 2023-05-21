class Solution:
    def rangeSum(self, nums: List[int], n: int, left: int, right: int) -> int:
        MODULO = 10**9 + 7
        prefixSums = [0]
        for i in range(n):
            prefixSums.append(prefixSums[-1] + nums[i])
        
        prefixPrefixSums = [0]
        for i in range(n):
            prefixPrefixSums.append(prefixPrefixSums[-1] + prefixSums[i + 1])

        def getCount(x: int) -> int:
            count = 0
            j = 1
            # ������������ÿһ�㣬ͳ�����������ĸ���
            for i in range(n):
	            # i �ڲ������������� prefixSums[i] һֱ��ʾ���ǵ�ǰ��ĵ�һ��Ԫ��
                while j <= n and prefixSums[j] - prefixSums[i] <= x:
	                # ��������������
                    j += 1
                j -= 1
                count += j - i
            return count

        def getKth(k: int) -> int:
	        # �����������ֲ��Ҿ�������߽�
			# ���ҵ���һ������ count == k ��ֵ��ʹcount == k����Сֵ��
            left, right = 0, prefixSums[n]
            while left <= right:
                mid = (left + right) // 2
                count = getCount(mid)
                if count < k:
                    left = mid + 1
                else:
                    right = mid - 1
            return left

        def getSum(k: int) -> int:
            num = getKth(k)
            total, count = 0, 0
            j = 1
            # ������������󡱵�ÿһ��
            for i in range(n):
                while j <= n and prefixSums[j] - prefixSums[i] < num:
                    j += 1
                # ��ǰ j λ�õ�Ԫ���� i �� �� 1 �����ڵ��� num ��ֵ
                # ����Ҫ�ҵ������һ��С�� num ��Ԫ�أ����� -1
                # ȷ��������ұ߽� j
                j -= 1

                # ���������
                total += prefixPrefixSums[j] - prefixPrefixSums[i] - prefixSums[i] * (j - i)
                # ��¼��ǰ�з��������ĸ���
                count += j - i
	        # ����ϵ��� num �Ĳ���
            total += num * (k - count)
            return total

        return (getSum(right) - getSum(left - 1)) % MODULO