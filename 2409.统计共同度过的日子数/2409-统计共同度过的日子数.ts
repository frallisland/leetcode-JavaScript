function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    let [aStM, aStD]=arriveAlice.split("-").map(v=>parseInt(v))
    let [aEdM, aEdD]=leaveAlice.split("-").map(v=>parseInt(v))

    let [bStM, bStD]=arriveBob.split("-").map(v=>parseInt(v))
    let [bEdM, bEdD]=leaveBob.split("-").map(v=>parseInt(v))

    function acc(m:number, d:number):number{
        let days:number[]=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        let tot:number=0
        for(let i=0; i<m-1; i++){
            tot+=days[i]
        }
        return tot+d;
    }

    let aSt:number=acc(aStM, aStD), aEd:number=acc(aEdM, aEdD)
    let bSt:number=acc(bStM, bStD), bEd:number=acc(bEdM, bEdD)

    if(aSt>bEd || aEd<bSt) return 0
    // console.log(aSt, aEd, bSt, bEd)
    return Math.min(aEd, bEd)-Math.max(aSt, bSt)+1
};