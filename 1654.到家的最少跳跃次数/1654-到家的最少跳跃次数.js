/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function (forbidden, a, b, x) {
    if (x == 0) return 0
    let q = [[0, 1]]//从0开始，1向右
    let res = 0
    let max = Math.max(...forbidden) + x + a + b //结束上限
    let v = [3]
    for (let f of forbidden) v[f] = 3 //ob11 高位标记已搜索左 低位标记已搜索右
    while (q.length) {
        ++res
        let L = q.length
        for (let i = 0; i < L; ++i) {
            let p = q.shift()
            let right = p[0] + a
            if (right == x) return res
            if ((v[right] & 1) == 0 && right <= max) { //右搜
                v[right] = v[right] | 1
                q.push([right, 1])
            }
            if (p[1] == 0) continue
            let left = p[0] - b
            if (left == x) return res
            if (left > 0 && (v[left] & 2) == 0) { //左搜
                v[left] = v[left] | 2
                q.push([left, 0])
            }
        }
    }
    return -1
};