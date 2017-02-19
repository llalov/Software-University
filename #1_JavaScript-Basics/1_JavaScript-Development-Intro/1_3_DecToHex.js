/**
 * Created by Lucho on 3/11/2015.
 */
var num = prompt("Enter a number");

function decToHex(number) {
    var result = (+number).toString(16).toUpperCase();
    return result;
}
alert(decToHex(num));
