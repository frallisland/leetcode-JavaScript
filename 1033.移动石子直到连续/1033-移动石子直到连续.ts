function numMovesStones(a: number, b: number, c: number): number[] {
    if(a>b) [a, b]=[b, a];
    if(a>c) [a, c]=[c, a];
    if(b>c) [b, c]=[c, b];
    let _max:number=c-a-2;

    let _min:number=Number.MAX_VALUE;
    if(a+1===b && a+2===c) _min=0;
    else if((a+1===b && a+2!==c) || (a+1!==b && b+1===c) || (b-a===2 || c-b===2)) _min=1;
    else _min=2;
    return [_min, _max];
};