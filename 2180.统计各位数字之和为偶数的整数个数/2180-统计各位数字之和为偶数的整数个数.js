var countEven = function(num) {
    let y = Math.floor(num / 10), x = num % 10;
    let res = y * 5, ySum = 0;
    while (y !== 0) {
        ySum += y % 10;
        y = Math.floor(y / 10);
    }
    if (ySum % 2 === 0) {
        res += Math.floor(x / 2) + 1;
    } else {
        res += Math.floor((x + 1) / 2);
    }
    return res - 1;
};