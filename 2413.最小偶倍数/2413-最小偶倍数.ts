function smallestEvenMultiple(n: number): number {
    const gcd=(a:number, b:number):number=>{
        if(a%b===0) return b;
        return gcd(b, a%b);
    }
    const mcf=gcd(2, n);
    return mcf*Math.floor(2/mcf)*Math.floor(n/mcf);
};