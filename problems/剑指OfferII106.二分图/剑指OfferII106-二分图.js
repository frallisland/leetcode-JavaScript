var isBipartite = function (graph) {
  // DFS �������
  const traverse = (graph, v) => {
    // ����Ѿ�ȷ�����Ƕ���ͼ�ˣ��Ͳ����˷�ʱ���ٵݹ������
    if (!ok) return;
    visited[v] = true;
    for (let w of graph[v]) {
      if (!visited[w]) {
        /**
         * ���ڽڵ� w û�б����ʹ�
         * ��ôӦ�ø��ڵ� w Ϳ�Ϻͽڵ� v ��ͬ����ɫ
         */
        color[w] = !color[v];
        // �������� w
        traverse(graph, w);
      } else {
        /**
         * ���ڽڵ� w �Ѿ������ʹ�
         * ���� v �� w ����ɫ�ж��Ƿ��Ƕ���ͼ
         */
        if (color[w] == color[v]) {
          ok = false;
        }
      }
    }
  };
  // ��¼ͼ�Ƿ���϶���ͼ����
  let ok = true;
  let n = graph.length;
  // ��¼ͼ�нڵ����ɫ��false �� true �������ֲ�ͬ��ɫ
  let color = new Array(n).fill(false);
  // ��¼ͼ�нڵ��Ƿ񱻷��ʹ�
  let visited = new Array(n).fill(false);
  // ��Ϊͼ��һ������ͨ�ģ����ܴ��ڶ����ͼ
  // ����Ҫ��ÿ���ڵ㶼��Ϊ������һ�α���
  // ��������κ�һ����ͼ���Ƕ���ͼ������ͼ���������ͼ
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      traverse(graph, i);
    }
  }
  return ok;
};