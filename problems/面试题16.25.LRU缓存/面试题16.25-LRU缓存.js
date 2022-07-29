/**
 * @description ��������
 * @param {LinkNode} leftNode
 * @param {LinkNode} rightNode
 */
function connect(leftNode, rightNode) {
  leftNode.right = rightNode;
  rightNode.left = leftNode;
}

/**
 * @description �����в���һ��
 * @param {LinkNode} leftNode
 * @param {LinkNode} rightNode
 * @param {LinkNode} insertNode
 */
function insert(leftNode, rightNode, insertNode) {
  leftNode.right = insertNode;
  rightNode.left = insertNode;
  insertNode.left = leftNode;
  insertNode.right = rightNode;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.head = {
    val: -1,
    left: null,
    right: null
  };
  this.head.left = this.head.right = this.head;
  this.array = [];
  this.capacity = capacity;
  this.linkLength = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.array[key];
  if (node) {
    if (node.inLinkList) {
      const head = this.head;
      connect(node.left, node.right);
      insert(head, head.right, node);
      return node.val;
    } else {
      this.array[key] = undefined;
      return -1;
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const head = this.head;
  if (this.array[key] && this.array[key].inLinkList) {
    // ԭ����ֵ��
    const node = this.array[key];
    // ����ֵ
    node.val = value;
    // �ᵽ����ͷ
    connect(node.left, node.right);
    insert(head, head.right, node);
  } else {
    // �������ȣ�ȥ����ĩβ��Ԫ��
    if (this.linkLength === this.capacity) {
      head.left.inLinkList = false;
      connect(head.left.left, head);
      this.linkLength--;
    }
    // ԭ��ûֵ
    // ���ɽڵ�
    const node = {
      val: value,
      left: null,
      right: null,
      inLinkList: true
    };
    this.array[key] = node;
    this.linkLength++;
    insert(head, head.right, node);
  }
};