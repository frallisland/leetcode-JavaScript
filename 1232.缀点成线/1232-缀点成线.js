/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    const n=coordinates.length;

    if(coordinates[0][0]===coordinates[1][0]){
        let x=coordinates[0][0];
        for(let i=2; i<n; i++){
            if(coordinates[i][0]!==x){
                return false;
            }
        }
        return true;
    }

    let k=(coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0]);
    let b=coordinates[0][1]-k*coordinates[0][0];
    for(let i=2; i<n; i++){
        if(k*coordinates[i][0]+b!==coordinates[i][1]){
            return false;
        }
    }
    return true;
};