var smallestSufficientTeam = function(req_skills, people) {
    const n = req_skills.length;
    const m = people.length;
    let skillIndex = new Map();
    for (let i = 0; i < n; i++) {
        skillIndex.set(req_skills[i], i);
    }
    let dp = new Array(1 << n);
    dp[0] = [];
    for (let i = 0; i < m; i++) {
        let cur_skill = 0;
        for (let s of people[i]) {
            cur_skill |= 1 << skillIndex.get(s);
        }
        for (let prev = 0; prev < dp.length; prev++) {
            if (dp[prev] === undefined) {
                continue;
            }
            let comb = prev | cur_skill;
            if (dp[comb] === undefined || dp[prev].length + 1 < dp[comb].length) {
                dp[comb] = [...dp[prev], i];
            }
        }
    }
    return dp[(1 << n) - 1];
};