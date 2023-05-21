interface Code{
    num:number,
    cnt:number
}

function rearrangeBarcodes(barcodes: number[]): number[] {
    const n=barcodes.length
    let ans:number[]=new Array(n).fill(null)
    // 先填偶数下标，再填奇数下标
    const count=new Map<number, number>()
    for(let b of barcodes){
        count.set(b, (count.get(b)||0)+1)
    }
    let _max=Array.from(count).sort((a, b)=>b[1]-a[1])
    
    let idx:number=0
    while(_max.length){
        const code=_max.shift()
        for(let i=0; i<code[1]; i++){
            ans[idx]=code[0]
            if(idx+2>=n) idx=1
            else idx+=2
        }
    }
    return ans
};