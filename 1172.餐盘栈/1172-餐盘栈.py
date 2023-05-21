class DinnerPlates:
    def __init__(self, capacity: int):
        self.capacity = capacity  # ջ������
        self.stacks = []  # ����ջ
        self.h = []  # ��С�ѣ�����δ��ջ���±�

    def push(self, val: int) -> None:
        if self.h and self.h[0] >= len(self.stacks):
            self.h = []  # ���ж���Խ���±ֱ꣬�����
        if self.h:  # ����δ��ջ
            self.stacks[self.h[0]].append(val)  # ��ջ
            if len(self.stacks[self.h[0]]) == self.capacity:  # ջ����
                heappop(self.h)  # �Ӷ���ȥ��
        else:  # ����ջ��������
            self.stacks.append([val])  # ���һ���µ�ջ
            if self.capacity > 1:  # �µ�ջû����
                heappush(self.h, len(self.stacks) - 1)  # ���

    def pop(self) -> int:
        # �ȼ�Ϊ popAtStack ���һ���ǿ�ջ
        return self.popAtStack(len(self.stacks) - 1)

    def popAtStack(self, index: int) -> int:
        if index < 0 or index >= len(self.stacks) or len(self.stacks[index]) == 0:
            return -1  # �Ƿ�����
        if len(self.stacks[index]) == self.capacity:  # ��ջ
            heappush(self.h, index)  # Ԫ�س�ջ��ջ�Ͳ����ˣ����±����
        val = self.stacks[index].pop()
        while self.stacks and len(self.stacks[-1]) == 0:
            self.stacks.pop()  # ȥ��ĩβ�Ŀ�ջ����ɾ���������±��� push ʱ����
        return val