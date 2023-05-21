/**
 * @param {character[][]} seats
 * @return {number}
 */
let memory=new Array(8).fill(0).map(x=>new Array(1<<8).fill(0)) // 20*1048576=2*10^8
let compressed_seats=[]

function f(X, rowNum, width){
    // 记忆化生效
    if(memory[rowNum][X]!==-1) return memory[rowNum][X]

    let ans=0
    for(let schme=0; schme!==(1<<width); ++schme){
        // 与下行出现重叠
        if(schme&~X || schme&(schme<<1)) continue

        let curans=0
        for(let j=0; j!==width; j++){
            if((1<<j)&schme){
                ++curans;
            }
        }

        if(rowNum===compressed_seats.length-1){
            ans=Math.max(ans, curans)
        }else{
            let nextSeats=compressed_seats[rowNum+1]
            nextSeats&=~(schme<<1)
            nextSeats&=~(schme>>1)
            ans=Math.max(ans, curans+f(nextSeats, rowNum+1, width))
        }
    }
    memory[rowNum][X]=ans
    return ans
}

function compress(row){
    let ans=0
    for(let c of row){
        ans<<=1
        if(c==='.'){
            ++ans;
        }
    }
    return ans
}

var maxStudents = function(seats) {
    for(let i=0; i!==seats.length; i++){
        for(let j=0; j!=(1<<seats[0].length); j++){
            memory[i][j]=-1
        }
    }
    compressed_seats=[]
    
    for(let row of seats){
        compressed_seats.push(compress(row))
    }

    return f(compressed_seats[0], 0, seats[0].length)
};