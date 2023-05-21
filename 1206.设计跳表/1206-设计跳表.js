const MAX_LEVEL = 32;
const P_FACTOR = 0.25;
var Skiplist = function() {
    this.head = new SkiplistNode(-1, MAX_LEVEL);
    this.level = 0;
};

Skiplist.prototype.search = function(target) {
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        /* �ҵ��� i ��С������ӽ� target ��Ԫ��*/
        while (curr.forward[i] && curr.forward[i].val < target) {
            curr = curr.forward[i];
        }
    }
    curr = curr.forward[0];
    /* ��⵱ǰԪ�ص�ֵ�Ƿ���� target */
    if (curr && curr.val === target) {
        return true;
    } 
    return false;
};

Skiplist.prototype.add = function(num) {
    const update = new Array(MAX_LEVEL).fill(this.head);
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        /* �ҵ��� i ��С������ӽ� num ��Ԫ��*/
        while (curr.forward[i] && curr.forward[i].val < num) {
            curr = curr.forward[i];
        }
        update[i] = curr;
    }
    const lv = randomLevel();
    this.level = Math.max(this.level, lv);
    const newNode = new SkiplistNode(num, lv);
    for (let i = 0; i < lv; i++) {
        /* �Ե� i ���״̬���и��£�����ǰԪ�ص� forward ָ���µĽڵ� */
        newNode.forward[i] = update[i].forward[i];
        update[i].forward[i] = newNode;
    }
};

Skiplist.prototype.erase = function(num) {
    const update = new Array(MAX_LEVEL).fill(0);
    let curr = this.head;
    for (let i = this.level - 1; i >= 0; i--) {
        /* �ҵ��� i ��С������ӽ� num ��Ԫ��*/
        while (curr.forward[i] && curr.forward[i].val < num) {
            curr = curr.forward[i];
        }
        update[i] = curr;
    }
    curr = curr.forward[0];
    /* ���ֵ���ڴ��򷵻� false */
    if (!curr || curr.val !== num) {
        return false;
    }
    for (let i = 0; i < this.level; i++) {
        if (update[i].forward[i] !== curr) {
            break;
        }
        /* �Ե� i ���״̬���и��£��� forward ָ��ɾ���ڵ����һ�� */
        update[i].forward[i] = curr.forward[i];
    }
    /* ���µ�ǰ�� level */
    while (this.level > 1 && !this.head.forward[this.level - 1]) {
        this.level--;
    }
    return true;
};

const randomLevel = () => {
    let lv = 1;
    /* ������� lv */
    while (Math.random() < P_FACTOR && lv < MAX_LEVEL) {
        lv++;
    }
    return lv;
}

class SkiplistNode {
    constructor(val, maxLevel) {
        this.val = val;
        this.forward = new Array(maxLevel).fill(0);
    }
}