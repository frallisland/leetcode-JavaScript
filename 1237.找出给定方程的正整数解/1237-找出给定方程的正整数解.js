var findSolution = function(customfunction, z) {
    const res = [];
    for (let x = 1, y = 1000; x <= 1000 && y >= 1; x++) {
        while (y >= 1 && customfunction.f(x, y) > z) {
            y--;
        }
        if (y >= 1 && customfunction.f(x, y) === z) {
            res.push([x, y]);
        }
    }
    return res;
};