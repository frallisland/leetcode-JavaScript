/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    if(suits[0]===suits[1] && suits[0]===suits[2] && suits[0]===suits[3] && suits[0]===suits[4]) return 'Flush';

    let map=new Map();
    for(let rank of ranks){
        map.set(rank, (map.get(rank)||0)+1);
    }

    if(map.size===5) return 'High Card';

    let trip=false;
    for(let [_, v] of map){
        if(v>=3) trip=true;
    }
    if(trip) return 'Three of a Kind';
    return 'Pair';

};