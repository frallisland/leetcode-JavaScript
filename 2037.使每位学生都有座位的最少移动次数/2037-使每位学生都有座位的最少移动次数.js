/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b)=>a-b);
    students.sort((a,b)=>a-b);

    let ans=0;
    const n=students.length;
    for(let i=0; i<n; i++){
        ans+=Math.abs(students[i]-seats[i]);
    }
    return ans;
};