Trie = lambda : defaultdict(Trie)
CNT = '#'

class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        tr = Trie()
        for w in words:
            cur = tr
            for ch in w:
                cur = cur[ch]
                cur[CNT] = cur.get(CNT, 0) + 1
        
        res = []
        for w in words:
            cur, ans = tr, 0
            for ch in w:
                cur = cur[ch]
                ans += cur[CNT]
            res.append(ans)
        return res