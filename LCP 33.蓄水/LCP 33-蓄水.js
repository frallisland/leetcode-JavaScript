var storeWater = function(bucket, vat) {
    const maxk = _.max(vat);
    if (maxk === 0) {
        return 0;
    }
    let res = Number.MAX_VALUE;
    for (let k = 1; k <= maxk && k < res; ++k) {
        let t = 0;
        for (let i = 0; i < bucket.length; ++i) {
            t += Math.max(0, Math.floor((vat[i] + k - 1) / k - bucket[i]));
        }
        res = Math.min(res, t + k);
    }
    return res;
};