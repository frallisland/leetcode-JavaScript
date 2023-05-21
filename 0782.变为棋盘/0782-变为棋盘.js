var movesToChessboard = function(board) {
    const n = board.length;
    let rowMask = 0, colMask = 0;        

    /* ������̵ĵ�һ�����һ�� */
    for (let i = 0; i < n; i++) {
        rowMask |= (board[0][i] << i);
        colMask |= (board[i][0] << i);
    }
    const reverseRowMask = ((1 << n) - 1) ^ rowMask;
    const reverseColMask = ((1 << n) - 1) ^ colMask;
    let rowCnt = 0, colCnt = 0;
    for (let i = 0; i < n; i++) {
        let currRowMask = 0;
        let currColMask = 0;
        for (let j = 0; j < n; j++) {
            currRowMask |= (board[i][j] << j);
            currColMask |= (board[j][i] << j);
        }
        /* ���ÿһ�е�״̬�Ƿ�Ϸ� */
        if (currRowMask !== rowMask && currRowMask !== reverseRowMask) {
            return -1;
        } else if (currRowMask === rowMask) {
            /* ��¼���һ����ͬ������ */
            rowCnt++;
        }
        /* ���ÿһ�е�״̬�Ƿ�Ϸ� */
        if (currColMask !== colMask && currColMask !== reverseColMask) {
            return -1;
        } else if (currColMask === colMask) {
            /* ��¼���һ����ͬ������ */
            colCnt++;
        }
    }
    const rowMoves = getMoves(rowMask, rowCnt, n);
    const colMoves = getMoves(colMask, colCnt, n);
    return (rowMoves == -1 || colMoves == -1) ? -1 : (rowMoves + colMoves); 
};

const getMoves = (mask, count, n) => {
    const ones = bitCount(mask);
    if ((n & 1) === 1) {
        /* ��� n Ϊ��������ÿһ���� 1 �� 0 ����Ŀ���Ϊ 1�������������н��� */
        if (Math.abs(n - 2 * ones) !== 1 || Math.abs(n - 2 * count) !== 1 ) {
            return -1;
        }
        if (ones === (n >> 1)) {
            /* �� 0 Ϊ��ͷ����С�������� */
            return Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA);
        } else {
            return Math.floor((n + 1) / 2) - bitCount(mask & 0x55555555);
        }
    } else { 
        /* ��� n Ϊż������ÿһ���� 1 �� 0 ����Ŀ��ȣ������������н��� */
        if (ones !== (n >> 1) || count !== (n >> 1)) {
            return -1;
        }
        /* �ҵ��е���С�������� */
        const count0 = Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA);
        const count1 = Math.floor(n / 2) - bitCount(mask & 0x55555555);  
        return Math.min(count0, count1);
    }
}

const bitCount = (num) => {
    return num.toString(2).split('0').join('').length
}