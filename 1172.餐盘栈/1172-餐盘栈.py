class DinnerPlates:
    def __init__(self, capacity: int):
        self.capacity = capacity  # 栈的容量
        self.stacks = []  # 所有栈
        self.h = []  # 最小堆，保存未满栈的下标

    def push(self, val: int) -> None:
        if self.h and self.h[0] >= len(self.stacks):
            self.h = []  # 堆中都是越界下标，直接清空
        if self.h:  # 还有未满栈
            self.stacks[self.h[0]].append(val)  # 入栈
            if len(self.stacks[self.h[0]]) == self.capacity:  # 栈满了
                heappop(self.h)  # 从堆中去掉
        else:  # 所有栈都是满的
            self.stacks.append([val])  # 添加一个新的栈
            if self.capacity > 1:  # 新的栈没有满
                heappush(self.h, len(self.stacks) - 1)  # 入堆

    def pop(self) -> int:
        # 等价为 popAtStack 最后一个非空栈
        return self.popAtStack(len(self.stacks) - 1)

    def popAtStack(self, index: int) -> int:
        if index < 0 or index >= len(self.stacks) or len(self.stacks[index]) == 0:
            return -1  # 非法操作
        if len(self.stacks[index]) == self.capacity:  # 满栈
            heappush(self.h, index)  # 元素出栈后，栈就不满了，把下标入堆
        val = self.stacks[index].pop()
        while self.stacks and len(self.stacks[-1]) == 0:
            self.stacks.pop()  # 去掉末尾的空栈（懒删除，堆中下标在 push 时处理）
        return val