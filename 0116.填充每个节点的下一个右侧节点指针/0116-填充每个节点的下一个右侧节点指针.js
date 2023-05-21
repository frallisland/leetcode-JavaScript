var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    // �Ӹ��ڵ㿪ʼ
    let leftmost = root;
    
    while (leftmost.left !== null) {
        
        // ������һ��ڵ���֯�ɵ�����Ϊ��һ��Ľڵ���� next ָ��
        let head = leftmost;
        
        while (head !== null) {
            
            // CONNECTION 1
            head.left.next = head.right;
            
            // CONNECTION 2
            if (head.next != null) {
                head.right.next = head.next.left;
            }
            
            // ָ������ƶ�
            head = head.next;
        }
        
        // ȥ��һ�������Ľڵ�
        leftmost = leftmost.left;
    }
    
    return root;
};