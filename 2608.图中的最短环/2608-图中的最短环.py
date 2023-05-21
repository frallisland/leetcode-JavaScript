class Solution:
    def findShortestCycle(self, n: int, edges: List[List[int]]) -> int:
        g = [[] for _ in range(n)]
        for x, y in edges:
            g[x].append(y)
            g[y].append(x)  # ��ͼ

        def bfs(start: int) -> int:
            ans = inf
            dis = [-1] * n  # dis[i] ��ʾ�� start �� i �����·����
            dis[start] = 0
            q = deque([(start, -1)])
            while q and ans == inf:
                x, fa = q.popleft()
                for y in g[x]:
                    if dis[y] < 0:  # ��һ������
                        dis[y] = dis[x] + 1
                        q.append((y, x))
                    elif y != fa:  # �ڶ�������
                        ans = min(ans, dis[x] + dis[y] + 1)
            return ans

        ans = min(bfs(i) for i in range(n))
        return ans if ans < inf else -1
