/**
 * Created by Lucho on 3/13/2015.
 */
function calcCylinderVol(arr) {
    var volume = (Math.PI*(arr[0]*arr[0])*arr[1]).toFixed(3);
    return volume;
}

console.log(calcCylinderVol([2, 4]));
console.log(calcCylinderVol([5, 8]));
console.log(calcCylinderVol([12, 3]));