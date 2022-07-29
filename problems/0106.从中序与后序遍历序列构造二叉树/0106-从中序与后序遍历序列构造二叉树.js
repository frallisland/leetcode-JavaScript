var buildTree = function(inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        // �������û�нڵ㹹��������ˣ��ͽ���
        if (in_left > in_right) {
            return null;
        }

        // ѡ�� post_idx λ�õ�Ԫ����Ϊ��ǰ�������ڵ�
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // ���� root ����λ�÷ֳ�������������
        const index = idx_map.get(root_val);

        // �±��һ
        post_idx--;
        // ����������
        root.right = helper(index + 1, in_right);
        // ����������
        root.left = helper(in_left, index - 1);
        return root;
    }

    // �Ӻ�����������һ��Ԫ�ؿ�ʼ
    post_idx = postorder.length - 1;

    // ������Ԫ�أ��±꣩��ֵ�ԵĹ�ϣ��
    let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
};