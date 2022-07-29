var columns = [],//����ÿһ�е�����
    rows = [],//����ÿһ�е�����
    grids = [],//����ÿһ���Ź��������
    f = 0;//�������

// ��ʼ���������������ֵ
var init = function(board){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // ��ȡֵ
      const value = board[i][j];
      // ���жϷ� . Ԫ��
      if (value !== '.') {
          rows[i].push(value);
          columns[j].push(value);
          //�Ź����±�
          const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          grids[gridIndex].push(value);
        } 
      }
    }
};
//����ܷ������λ��
var check = function(i,j,board,value){
    const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // ��Ӧ�ĺ���
    if (rows[i].includes(value) || columns[j].includes(value) || grids[gridIndex].includes(value)) {
        return false;
    }
    return true;
};
//�����������
var fillBoard = function(i,j,board){
    //������
    if(f == 1 || i > 8) {
        return ;
    }
    //��Ҫ���
    if(board[i][j] == '.'){
        //����9������
        for(let num = 1; num < 10; num++){
            if(f == 0 && check(i,j,board,num.toString())){
                rows[i].push(num.toString());//������
                columns[j].push(num.toString());//������
                const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                grids[gridIndex].push(num.toString());//����С�Ź���
                board[i][j] = num.toString();//��������
                if(i == 8 && j == 8) {//������
                    f = 1;
                    return;
                }else if(j == 8) fillBoard(i + 1,0,board);//����
                else fillBoard(i,j+1,board);//����
                 if(f == 0){//����
                    rows[i].pop();//������
                    columns[j].pop();//������
                    grids[gridIndex].pop();//����С�Ź���
                    board[i][j] = '.';//���´�Ź���
                }
            }
        }
    }else if(i == 8 && j == 8) {//��������
        f = 1;
        return;
    }else if(j == 8) fillBoard(i + 1,0,board);//����
    else fillBoard(i,j+1,board);//����
    return board;
};
var solveSudoku = function(board) {
    f = 0;
    for(let i = 0; i < 9; i++){
        columns[i] = [];
        rows[i] = [];
        grids[i] = [];
    }
    init(board);  
    board = fillBoard(0,0,board);
};