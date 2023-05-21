/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;
  // ��������
  let directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  // �����������
  const dfs = (i, j) => {
    // �����߽� ���߱�����Ѿ��Ǻ�ˮ��
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] == 0) return;
    // ��û�� �����ظ�����
    grid[i][j] = 0;
    for (let dir of directions) dfs(dir[0] + i, dir[1] + j);
  };
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};