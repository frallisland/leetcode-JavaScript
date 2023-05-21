function findMaxK(nums: number[]): number {
    const set:Set<number>=new Set()
    let ans:number=-1
    nums.sort((a:number, b:number)=>a-b)
    for(let num of nums){
        if(num<=0){
            set.add(num)
        }else{
            if(set.has(-1*num)){
                ans=num
            }
        }
    }
    return ans
};