var getTargetCopy = function (original, cloned, target) {
    let ans = null
    function loop(node) {
        if (!node) return true
        if (node.val === target.val) {
            ans = node
            return false
        }

        return loop(node.left) && loop(node.right)
    }

    loop(cloned)
    return ans
}