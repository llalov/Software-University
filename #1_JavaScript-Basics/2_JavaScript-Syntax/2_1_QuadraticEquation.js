/**
 * Created by Lucho on 3/12/2015.
 */
var a = 2;
var b = -4;
var c = 2;

var x1;
var x2;
var discriminant = (b*b)-(4*(a*c));
if (a === 0) {
    console.log("\"a\" can't be 0");
}
else if (discriminant > 0){
    x2 = (-b + Math.sqrt(discriminant))/(2*a);
    x1 = (-b - Math.sqrt(discriminant))/(2*a);
    console.log("X1 = "+x1+"\n"+"X2 = "+x2);
}
else if (discriminant === 0) {
    x2 = (-b/(2*a));
    console.log("X = "+x2);
}
else if (discriminant < 0) {
    console.log ("No real roots");
}