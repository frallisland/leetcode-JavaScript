var closestCost = function(baseCosts, toppingCosts, target) {
    let res = _.min(baseCosts);
    const dfs = (toppingCosts, p, curCost, target) => {
        if (Math.abs(res - target) < curCost - target) {
            return;
        } else if (Math.abs(res - target) >= Math.abs(curCost - target)) {
            if (Math.abs(res - target) > Math.abs(curCost - target)) {
                res = curCost;
            } else {
                res = Math.min(res, curCost);
            }
        }
        if (p === toppingCosts.length) {
            return;
        }
        dfs(toppingCosts, p + 1, curCost + toppingCosts[p] * 2, target);
        dfs(toppingCosts, p + 1, curCost + toppingCosts[p], target);
        dfs(toppingCosts, p + 1, curCost, target);
    };
    for (const b of baseCosts) {
        dfs(toppingCosts, 0, b, target);
    }
    return res;
}