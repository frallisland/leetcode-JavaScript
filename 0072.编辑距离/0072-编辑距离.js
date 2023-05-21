const minDistance = (word1, word2) => {
    let dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1).fill(0));

    //��ʼ�����飬word1ǰi���ַ�������Ҫi�β���������i��ɾ�����word2
    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i;
    }

    //��ʼ�����飬word2ǰi���ַ�������Ҫi�β���������j�β�����word1
    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= word1.length; i++) {
        //ѭ��word1��word2
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                //���word1[i-1] === word2[j-1],˵�����һ���ַ����ò�����
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                //dp[i-1][j] + 1����Ӧɾ��
                //dp[i][j-1] + 1����Ӧ����
                // dp[i-1][j-1] + 1����Ӧ�滻����
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }

    return dp[word1.length][word2.length];
};