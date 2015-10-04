/**
 * Created by Lucho on 3/13/2015.
 */
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Write a number for kmH to calculate Knots: ", function(answer) {

    var processed = convertKMHtoKnots(answer);
    console.log("Output: ", processed);
    rl.close();
});
function convertKMHtoKnots(kmh) {
    var knots = kmh / 1.852;
    var roundedKnots = knots.toFixed(2);
    return roundedKnots;
}