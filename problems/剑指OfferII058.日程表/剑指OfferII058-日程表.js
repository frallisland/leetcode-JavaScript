var MyCalendar = function () {
  this.events = [];
};

// ����Ҫ����ĵ�������߽�
MyCalendar.prototype.findInsertIndex = function (start) {
  var left = 0;
  var right = this.events.length - 1;
  // ����ұ�����
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    // ���Ҫ������������ʼ��պø���ǰ�������ʼ����ͬ�����ҵ���Ҫ���������λ��
    if (this.events[mid][0] === start) {
      return mid;
    } else if (this.events[mid][0] < start) {
      //  �ں����в���
      left = mid + 1;
    } else {
      // ��ǰ����в���
      right = mid - 1;
    }
  }
  return left;
};

MyCalendar.prototype.book = function (start, end) {
  let index = this.findInsertIndex(start);
  if (
    // ��ǰҪ������������ʼ��С��Ҫ���������ǰһ������Ľ�����
    (this.events[index - 1] && start < this.events[index - 1][1]) ||
    // ��ǰҪ���������Ľ��������Ҫ������������ʼ��
    (this.events[index] && end > this.events[index][0])
  ) {
    // ��ʾ���ص�  ���ܲ��루Ԥ����
    return false;
  }
  this.events.splice(index, 0, [start, end]);
  return true;
};