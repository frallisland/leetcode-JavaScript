class ExamRoom {
    /**
     * @param {number} N
     */
    constructor(N) {
        this.array = [];
        this.seatNo = 0;
        this.number = N - 1;
    }
    /**
     * @return {number}
     */
    seat() {
        this.seatNo = 0;
        if (this.array.length == 1) {
            if (this.array[0] == 0) {
                this.seatNo = this.number;
            } else if (this.array[0] == this.number) {
                this.seatNo = 0;
            } else {
                let distance1 = this.array[0];
                let distance2 = this.number - this.array[0];
                if (distance1 >= distance2) {
                    this.seatNo = 0 ;
                } else {
                    this.seatNo = this.number;
                }
            }
        } else if (this.array.length > 1) {
            let maxDistance = this.array[0], start;
            for (let i = 0; i < this.array.length - 1; i++) {
                let distance = Math.floor((this.array[i + 1] - this.array[i] >>> 1));
                if (maxDistance < distance) {
                    maxDistance = distance;
                    start = this.array[i]
                    this.seatNo = start + maxDistance;
                }
            }
            if (this.number - this.array[this.array.length - 1] > maxDistance) {
                this.seatNo = this.number;
            }
        }
        this.array.push(this.seatNo);
        this.array.sort((a, b) => { return a - b })
        return this.seatNo;
    }
    /** 
     * @param {number} p
     * @return {void}
     */
    leave(p) {
        let index = this.array.indexOf(p)
        this.array.splice(index, 1)
    };
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
