class Solution:
    def longestDecomposition(self, s: str) -> int:
        if s == "":
            return 0
        for i in range(1, len(s) // 2 + 1):  # ö��ǰ��׺����
            if s[:i] == s[-i:]:  # ���̷ָ�
                return 2 + self.longestDecomposition(s[i:-i])
        return 1  # �޷��ָ�