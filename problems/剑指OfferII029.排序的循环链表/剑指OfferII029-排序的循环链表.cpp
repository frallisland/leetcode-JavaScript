class Solution {
public:
    Node* insert(Node* head, int insertVal) {
        //�յģ�ûɶ��˵��
        if (!head) {
            Node* ret = new Node(insertVal);
            ret->next = ret;
            return ret;
        }
        //����λ�þ����֣�һ�����м䣬��һ�������ࡣ
        //��Ѱ�������ֵ����ȷ��β���ֵ��ͬʱ����м�λ���ܲ���Ļ��ǾͲ��뷵�ؾ�������
        Node* p = head->next;
        Node* p_pre = head;
        while (p != head) {
            if (
                (p_pre->val <= insertVal && insertVal <= p->val) ||  //���1
                (p->val < p_pre->val && (insertVal <= p->val || insertVal >= p_pre->val))  //���2
            ) {
                p_pre->next = new Node(insertVal, p);
                return head;
            }
            p_pre = p;
            p = p->next;
        }
        //����
        p_pre->next = new Node(insertVal, head);  //ע����p_pre������������һ���ڵ�
        return head;
    }
};