function findDelayedArrivalTime(a: number, d: number): number {
    return Math.floor((a+d)%24);
};