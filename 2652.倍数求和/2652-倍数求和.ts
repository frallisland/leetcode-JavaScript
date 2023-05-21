function sumOfMultiples(n: number): number {
    let _sum=0;
    for(let i=1; i<=n; i++){
        if(i%3===0 || i%5===0 || i%7===0){
            _sum+=i;
        }
    }
    return _sum;
};