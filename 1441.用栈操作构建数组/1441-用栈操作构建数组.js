var buildArray = function(target, n) {
    const res = [];
    let prev = 0;
    for (const number of target) {
        for (let i = 0; i < number - prev - 1; i++) {
            res.push("Push");
            res.push("Pop");
        }
        res.push("Push");
        prev = number;
    }
    return res;
};